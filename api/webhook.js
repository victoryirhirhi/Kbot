import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "../lessons.js";

const bot = new Telegraf(BOT_TOKEN);

const userProgress = {};
const userQuiz = {};

function getLesson(userId) {
  const category = "Novice";
  const index = userProgress[userId] || 0;
  return LESSONS[category]?.[index];
}

function nextLesson(userId) {
  userProgress[userId] = (userProgress[userId] || 0) + 1;
  return getLesson(userId);
}

bot.start(async (ctx) => {
  userProgress[ctx.from.id] = 0;
  const lesson = getLesson(ctx.from.id);
  if (!lesson) return ctx.reply("⚠️ No lessons found.");
  await sendLesson(ctx, lesson);
});

async function sendLesson(ctx, lesson) {
  await ctx.reply(
    `📘 *${lesson.title}*\n\n${lesson.content.join("\n\n")}`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📝 Take Quiz", callback_data: "start_quiz" }],
          [{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]
        ]
      }
    }
  );
}

// 📌 QUIZ LOGIC
bot.action("start_quiz", async (ctx) => {
  const lesson = getLesson(ctx.from.id);
  if (!lesson?.quiz?.length) {
    return ctx.answerCbQuery("No quiz for this lesson.");
  }

  userQuiz[ctx.from.id] = { index: 0, score: 0, questions: lesson.quiz };

  await sendQuizQuestion(ctx, ctx.from.id);
});

async function sendQuizQuestion(ctx, userId) {
  const quizState = userQuiz[userId];
  const q = quizState.questions[quizState.index];

  await ctx.reply(
    `❓ *Q${quizState.index + 1}:* ${q.q}`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: q.options.map((opt, i) => [
          { text: opt, callback_data: `quiz_answer_${i}` }
        ])
      }
    }
  );
}

bot.on("callback_query", async (ctx) => {
  const data = ctx.callbackQuery.data;

  if (data.startsWith("quiz_answer_")) {
    const userId = ctx.from.id;
    const quizState = userQuiz[userId];
    if (!quizState) return;

    const selected = parseInt(data.split("_")[2]);
    const currentQ = quizState.questions[quizState.index];

    if (selected === currentQ.answer) quizState.score++;

    quizState.index++;

    if (quizState.index >= quizState.questions.length) {
      await ctx.reply(
        `✅ Quiz finished!\nYour score: ${quizState.score}/${quizState.questions.length}`,
        {
          reply_markup: {
            inline_keyboard: [[{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]]
          }
        }
      );
      delete userQuiz[userId];
    } else {
      await sendQuizQuestion(ctx, userId);
    }
  }

  if (data === "next_lesson") {
    const lesson = nextLesson(ctx.from.id);
    if (!lesson) {
      return ctx.editMessageText("🎉 You've completed all lessons!");
    }
    await sendLesson(ctx, lesson);
  }
});

export default async function handler(req, res) {
  if (req.method === "GET") return res.status(200).send("Webhook is live");
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).end();
    } catch (err) {
      console.error("❌ Bot error:", err);
      res.status(500).send("Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
