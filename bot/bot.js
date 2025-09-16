import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "./lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// Track user progress
const userProgress = {};

function getLessonMessage(level, index) {
  const lesson = LESSONS[level][index];
  let text = `📘 *${lesson.title}*\n\n`;
  lesson.content.forEach((part, i) => {
    text += `${part}\n\n`;
  });
  return text;
}

// Start command
bot.start((ctx) => {
  userProgress[ctx.from.id] = { level: null, index: 0, completed: false };
  ctx.reply(
    "Welcome! 👋\n\nChoose your learning level:",
    Markup.inlineKeyboard([
      [Markup.button.callback("🟢 Novice", "choose_Novice")],
      [Markup.button.callback("🟡 Intermediate", "choose_Intermediate")],
      [Markup.button.callback("🔴 Professional", "choose_Professional")],
    ])
  );
});

// Handle level choice
bot.action(/choose_(.+)/, (ctx) => {
  const level = ctx.match[1];
  if (!LESSONS[level] || LESSONS[level].length === 0) {
    return ctx.answerCbQuery("⚠️ This level has no lessons yet.");
  }

  userProgress[ctx.from.id] = { level, index: 0, completed: false };

  const msg = getLessonMessage(level, 0);
  ctx.editMessageText(msg, {
    parse_mode: "Markdown",
    ...Markup.inlineKeyboard([
      [Markup.button.callback("Next ▶️", `next_${level}_0`)],
    ]),
  });
});

// Handle next lesson
bot.action(/next_(.+)_(\d+)/, (ctx) => {
  const level = ctx.match[1];
  let index = parseInt(ctx.match[2]) + 1;

  if (index < LESSONS[level].length) {
    userProgress[ctx.from.id].index = index;

    const msg = getLessonMessage(level, index);
    ctx.editMessageText(msg, {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [
          ...(index > 0
            ? [Markup.button.callback("◀️ Previous", `prev_${level}_${index}`)]
            : []),
          ...(index < LESSONS[level].length - 1
            ? [Markup.button.callback("Next ▶️", `next_${level}_${index}`)]
            : [Markup.button.callback("📋 Take Quiz", `quiz_${level}`)]),
        ],
      ]),
    });
  }
});

// Handle previous lesson
bot.action(/prev_(.+)_(\d+)/, (ctx) => {
  const level = ctx.match[1];
  let index = parseInt(ctx.match[2]) - 1;

  if (index >= 0) {
    userProgress[ctx.from.id].index = index;

    const msg = getLessonMessage(level, index);
    ctx.editMessageText(msg, {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [
          ...(index > 0
            ? [Markup.button.callback("◀️ Previous", `prev_${level}_${index}`)]
            : []),
          Markup.button.callback("Next ▶️", `next_${level}_${index}`),
        ],
      ]),
    });
  }
});

// Show quiz at the end of a level
bot.action(/quiz_(.+)/, (ctx) => {
  const level = ctx.match[1];
  const allQuizzes = LESSONS[level].flatMap((l) => l.quiz || []);
  if (allQuizzes.length === 0) {
    return ctx.editMessageText("📋 No quiz available for this level yet.");
  }

  // Store quiz progress
  userProgress[ctx.from.id].quizIndex = 0;
  userProgress[ctx.from.id].quizScore = 0;
  userProgress[ctx.from.id].quizQuestions = allQuizzes;

  const q = allQuizzes[0];
  ctx.editMessageText(`❓ *${q.q}*`, {
    parse_mode: "Markdown",
    ...Markup.inlineKeyboard(
      q.options.map((opt, i) =>
        [Markup.button.callback(opt, `answer_${i}`)]
      )
    ),
  });
});

// Handle quiz answers
bot.action(/answer_(\d+)/, (ctx) => {
  const user = userProgress[ctx.from.id];
  const answerIndex = parseInt(ctx.match[1]);
  const currentQ = user.quizQuestions[user.quizIndex];

  if (answerIndex === currentQ.answer) {
    user.quizScore++;
  }

  user.quizIndex++;

  if (user.quizIndex < user.quizQuestions.length) {
    const q = user.quizQuestions[user.quizIndex];
    ctx.editMessageText(`❓ *${q.q}*`, {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard(
        q.options.map((opt, i) =>
          [Markup.button.callback(opt, `answer_${i}`)]
        )
      ),
    });
  } else {
    ctx.editMessageText(
      `🎉 Quiz Completed!\n\nYou scored *${user.quizScore} / ${user.quizQuestions.length}*`,
      { parse_mode: "Markdown" }
    );
  }
});

export default bot;
