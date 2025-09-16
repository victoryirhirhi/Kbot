import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "./lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// In-memory user sessions
const userState = {};

function getUser(ctx) {
  const id = ctx.from.id;
  if (!userState[id]) {
    userState[id] = {
      level: "Novice",
      lessonIndex: 0,
      quizIndex: 0,
      quizScore: 0,
      inQuiz: false
    };
  }
  return userState[id];
}

// Start command
bot.start((ctx) => {
  const user = getUser(ctx);
  user.level = "Novice";
  user.lessonIndex = 0;
  user.inQuiz = false;
  ctx.reply(
    `👋 Welcome to Crypto Academy!\nLet's begin your journey with the **${user.level}** level.`,
    Markup.inlineKeyboard([
      [Markup.button.callback("Start Lessons ➡️", "nextLesson")]
    ])
  );
});

// Show a lesson
function sendLesson(ctx, user) {
  const lessons = LESSONS[user.level];
  const lesson = lessons[user.lessonIndex];
  const navButtons = [];

  if (user.lessonIndex > 0)
    navButtons.push(Markup.button.callback("⬅️ Previous", "prevLesson"));

  if (user.lessonIndex < lessons.length - 1)
    navButtons.push(Markup.button.callback("Next ➡️", "nextLesson"));
  else navButtons.push(Markup.button.callback("Start Quiz 📝", "startQuiz"));

  ctx.replyWithMarkdown(`📘 *${lesson.title}*\n\n${lesson.content}`, {
    reply_markup: { inline_keyboard: [navButtons] }
  });
}

// Next / Previous lesson handlers
bot.action("nextLesson", (ctx) => {
  const user = getUser(ctx);
  const lessons = LESSONS[user.level];
  if (user.lessonIndex < lessons.length) {
    if (user.lessonIndex >= lessons.length - 1) {
      ctx.answerCbQuery();
      ctx.reply(
        `🎯 You've finished all lessons in ${user.level}!\nLet's test your knowledge.`,
        Markup.inlineKeyboard([
          [Markup.button.callback("Start Quiz 📝", "startQuiz")]
        ])
      );
    } else {
      user.lessonIndex++;
      ctx.answerCbQuery();
      sendLesson(ctx, user);
    }
  }
});

bot.action("prevLesson", (ctx) => {
  const user = getUser(ctx);
  if (user.lessonIndex > 0) {
    user.lessonIndex--;
    ctx.answerCbQuery();
    sendLesson(ctx, user);
  } else {
    ctx.answerCbQuery("This is the first lesson");
  }
});

// Quiz
bot.action("startQuiz", (ctx) => {
  const user = getUser(ctx);
  user.inQuiz = true;
  user.quizIndex = 0;
  user.quizScore = 0;
  sendQuizQuestion(ctx, user);
});

function sendQuizQuestion(ctx, user) {
  const quizKey = `${user.level}Quiz`;
  const quiz = LESSONS[quizKey];
  if (user.quizIndex < quiz.length) {
    const q = quiz[user.quizIndex];
    ctx.reply(
      `❓ ${q.q}`,
      Markup.inlineKeyboard(
        q.options.map((opt, i) =>
          [Markup.button.callback(opt, `answer_${i}`)]
        )
      )
    );
  } else {
    finishQuiz(ctx, user);
  }
}

bot.action(/answer_(\d+)/, (ctx) => {
  const user = getUser(ctx);
  if (!user.inQuiz) return;

  const quizKey = `${user.level}Quiz`;
  const quiz = LESSONS[quizKey];
  const answer = parseInt(ctx.match[1]);
  const correct = quiz[user.quizIndex].answer;

  if (answer === correct) user.quizScore++;

  user.quizIndex++;
  ctx.answerCbQuery();
  sendQuizQuestion(ctx, user);
});

function finishQuiz(ctx, user) {
  const quizKey = `${user.level}Quiz`;
  const total = LESSONS[quizKey].length;
  const score = Math.round((user.quizScore / total) * 100);
  user.inQuiz = false;

  ctx.reply(`✅ Quiz Complete!\nYou scored ${score}%`);

  if (score >= 70) {
    let nextLevel = null;
    if (user.level === "Novice") nextLevel = "Intermediate";
    else if (user.level === "Intermediate") nextLevel = "Professional";

    if (nextLevel) {
      user.level = nextLevel;
      user.lessonIndex = 0;
      ctx.reply(
        `🎉 Congrats! You've unlocked the ${nextLevel} level.`,
        Markup.inlineKeyboard([
          [Markup.button.callback(`Proceed to ${nextLevel} ➡️`, "nextLesson")]
        ])
      );
    } else {
      ctx.reply("🏁 You have completed all levels! You're a pro now!");
    }
  } else {
    ctx.reply(
      "⚠️ Score below 70%. Review lessons and try quiz again.",
      Markup.inlineKeyboard([
        [Markup.button.callback("Retry Quiz 🔁", "startQuiz")]
      ])
    );
  }
}

export default bot;
