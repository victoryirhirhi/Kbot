import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "./lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// In-memory user state
const users = {}; // userId => { level: 'Novice', lessonIndex:0, partIndex:0, quizState: null }

// Helpers
function ensureUser(id) {
  if (!users[id]) users[id] = { level: 'Novice', lessonIndex: 0, partIndex: 0, quizState: null };
  return users[id];
}

function sendPart(ctx, user) {
  const levelData = LESSONS[user.level];
  if (!levelData) return ctx.reply('No lessons for this level.');
  const lesson = levelData[user.lessonIndex];
  if (!lesson) return ctx.reply('Lesson not found.');
  const partText = lesson.parts[user.partIndex];
  const buttons = [];
  if (user.partIndex < lesson.parts.length - 1) {
    buttons.push(Markup.button.callback('Next Part ➡️', 'next_part'));
  } else {
    // end of lesson: show Next Lesson and (level end will trigger level quiz when appropriate)
    buttons.push(Markup.button.callback('Next Lesson ⏭', 'next_lesson'));
  }
  buttons.push(Markup.button.callback('Back to Menu', 'menu'));
  return ctx.replyWithMarkdown(partText, Markup.inlineKeyboard([buttons]));
}

async function startLevel(ctx, level) {
  const id = ctx.from.id;
  const user = ensureUser(id);
  user.level = level;
  user.lessonIndex = 0;
  user.partIndex = 0;
  user.quizState = null;
  await sendPart(ctx, user);
}

// Bot handlers
bot.start(async (ctx) => {
  const id = ctx.from.id;
  ensureUser(id);
  await ctx.reply('Welcome to Crypto Academy! Choose your level:', Markup.inlineKeyboard([
    [Markup.button.callback('🟢 Novice', 'level_Novice')],
    [Markup.button.callback('🟡 Intermediate', 'level_Intermediate')],
    [Markup.button.callback('🔴 Professional', 'level_Professional')]
  ]));
});

bot.action(/level_(.+)/, async (ctx) => {
  const level = ctx.match[1];
  await startLevel(ctx, level);
  await ctx.answerCbQuery();
});

bot.action('next_part', async (ctx) => {
  const id = ctx.from.id;
  const user = ensureUser(id);
  user.partIndex++;
  await sendPart(ctx, user);
  await ctx.answerCbQuery();
});

bot.action('next_lesson', async (ctx) => {
  const id = ctx.from.id;
  const user = ensureUser(id);
  user.lessonIndex++;
  user.partIndex = 0;

  const levelData = LESSONS[user.level];
  if (user.lessonIndex >= levelData.length) {
    // Level complete -> send level quiz prompt
    user.quizState = { index: 0, score: 0 };
    await ctx.reply('🎯 You have completed this level. Ready for the level quiz?', Markup.inlineKeyboard([
      [Markup.button.callback('Start Level Quiz 📝', 'start_level_quiz')],
      [Markup.button.callback('Back to Menu', 'menu')]
    ]));
  } else {
    await sendPart(ctx, user);
  }
  await ctx.answerCbQuery();
});

bot.action('menu', async (ctx) => {
  await ctx.reply('Choose your level:', Markup.inlineKeyboard([
    [Markup.button.callback('🟢 Novice', 'level_Novice')],
    [Markup.button.callback('🟡 Intermediate', 'level_Intermediate')],
    [Markup.button.callback('🔴 Professional', 'level_Professional')]
  ]));
  await ctx.answerCbQuery();
});

// Level quiz handlers (Novice only for now)
bot.action('start_level_quiz', async (ctx) => {
  const id = ctx.from.id;
  const user = ensureUser(id);
  user.quizState = { index: 0, score: 0 };
  await sendQuizQuestion(ctx, id);
  await ctx.answerCbQuery();
});

// Define novice level quiz here (5 questions)
const noviceQuiz = [
  { q: 'What does a crypto wallet actually store?', options: ['Your coins', 'Your private keys', 'Your transactions', 'Your bank account'], answer: 1 },
  { q: 'What technology powers cryptocurrencies?', options: ['Cloud', 'Blockchain', 'Database', 'VPN'], answer: 1 },
  { q: 'Which of these is a scam sign?', options: ['Strong password', '2FA enabled', 'Promise of guaranteed returns', 'Cold wallet'], answer: 2 },
  { q: 'Before sending crypto, you should always check…', options: ['Gas price', 'Network', 'Recipient’s name', 'Phone number'], answer: 1 },
  { q: 'What does decentralized mean?', options: ['Controlled by one bank', 'Managed by one company', 'Controlled by many users', 'Hosted on one computer'], answer: 2 }
];

async function sendQuizQuestion(ctx, userId) {
  const user = ensureUser(userId);
  const idx = user.quizState.index;
  const q = noviceQuiz[idx];
  const buttons = q.options.map((opt, i) => Markup.button.callback(opt, `quiz_answer_${i}`));
  await ctx.reply(`❓ *Q${idx+1}:* ${q.q}`, Markup.inlineKeyboard(buttons));
}

bot.action(/quiz_answer_(\d+)/, async (ctx) => {
  const id = ctx.from.id;
  const user = ensureUser(id);
  const selected = Number(ctx.match[1]);
  const q = noviceQuiz[user.quizState.index];
  if (selected === q.answer) user.quizState.score++;
  user.quizState.index++;
  if (user.quizState.index < noviceQuiz.length) {
    await sendQuizQuestion(ctx, id);
  } else {
    const score = user.quizState.score;
    await ctx.reply(`🏁 Quiz complete. Your score: ${score}/${noviceQuiz.length}`);
    // Promote logic: if score >=4, advance level
    if (score >= 4) {
      user.level = 'Intermediate';
      user.lessonIndex = 0;
      user.partIndex = 0;
      user.quizState = null;
      await ctx.reply('🎉 You passed Novice! Intermediate unlocked. Return to menu or continue.', Markup.inlineKeyboard([[Markup.button.callback('Go to Intermediate', 'level_Intermediate')]]));
    } else {
      await ctx.reply('You did not pass. Review the lessons and try again. Type /start to begin.');
      user.lessonIndex = 0;
      user.partIndex = 0;
      user.quizState = null;
    }
  }
  await ctx.answerCbQuery();
});

// Export bot instance
export default bot;
