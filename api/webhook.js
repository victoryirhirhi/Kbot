import { Telegraf } from "telegraf";
import { LESSONS } from "../lessons.js";
import { BOT_TOKEN } from "../config.js";

const bot = new Telegraf(BOT_TOKEN);

// Track user progress
const userProgress = {};

bot.start((ctx) => {
  ctx.reply("Welcome to Crypto Academy 📚\n\nChoose your level:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🟢 Novice", callback_data: "Novice" }],
        [{ text: "🟡 Intermediate", callback_data: "Intermediate" }],
        [{ text: "🔴 Professional", callback_data: "Professional" }]
      ]
    }
  });
});

bot.on("callback_query", (ctx) => {
  const level = ctx.update.callback_query.data;
  const userId = ctx.from.id;

  if (LESSONS[level] && LESSONS[level].length > 0) {
    userProgress[userId] = { level, lessonIndex: 0, partIndex: 0 };

    const lesson = LESSONS[level][0];
    ctx.replyWithMarkdown(`📘 *${lesson.title}*\n\n${lesson.content[0]}`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Next ➡️", callback_data: "next_part" }]]
      }
    });
  } else {
    ctx.reply("Lessons coming soon 🚧");
  }
});

bot.action("next_part", (ctx) => {
  const userId = ctx.from.id;
  const progress = userProgress[userId];
  if (!progress) return ctx.reply("Please choose a level first with /start");

  const lessons = LESSONS[progress.level];
  const lesson = lessons[progress.lessonIndex];

  progress.partIndex++;

  if (progress.partIndex < lesson.content.length) {
    ctx.replyWithMarkdown(lesson.content[progress.partIndex], {
      reply_markup: {
        inline_keyboard: [[{ text: "Next ➡️", callback_data: "next_part" }]]
      }
    });
  } else {
    ctx.reply("🎯 You've completed this lesson!", {
      reply_markup: {
        inline_keyboard: [[{ text: "Take Quiz 📝", callback_data: "quiz" }]]
      }
    });
  }
});

bot.action("quiz", (ctx) => {
  const userId = ctx.from.id;
  const progress = userProgress[userId];
  const lesson = LESSONS[progress.level][progress.lessonIndex];

  progress.quizIndex = 0;
  sendQuizQuestion(ctx, lesson, progress);
});

function sendQuizQuestion(ctx, lesson, progress) {
  const q = lesson.quiz[progress.quizIndex];
  ctx.reply(q.q, {
    reply_markup: {
      inline_keyboard: q.options.map((opt, i) => [
        { text: opt, callback_data: `answer_${i}` }
      ])
    }
  });
}

bot.action(/answer_(\d+)/, (ctx) => {
  const userId = ctx.from.id;
  const progress = userProgress[userId];
  const lesson = LESSONS[progress.level][progress.lessonIndex];
  const userAnswer = Number(ctx.match[1]);
  const correct = lesson.quiz[progress.quizIndex].answer;

  if (userAnswer === correct) {
    ctx.reply("✅ Correct!");
  } else {
    ctx.reply("❌ Incorrect. Try to review the lesson.");
  }

  progress.quizIndex++;
  if (progress.quizIndex < lesson.quiz.length) {
    sendQuizQuestion(ctx, lesson, progress);
  } else {
    ctx.reply("🎉 Quiz completed! Type /start to choose another lesson.");
  }
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("Webhook function exists!");
  }
  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
