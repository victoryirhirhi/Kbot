import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import lessons from "../lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// Track users' progress in-memory (for demo)
const userProgress = {};

function getLesson(userId) {
  const index = userProgress[userId] || 0;
  return lessons[index];
}

function getNextLesson(userId) {
  userProgress[userId] = (userProgress[userId] || 0) + 1;
  return getLesson(userId);
}

bot.start((ctx) => {
  userProgress[ctx.from.id] = 0;
  const lesson = getLesson(ctx.from.id);
  ctx.reply(
    `📘 *${lesson.title}*\n\n${lesson.content}`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("➡️ Next Lesson", "next_lesson")]
      ])
    }
  );
});

bot.action("next_lesson", (ctx) => {
  const lesson = getNextLesson(ctx.from.id);

  if (!lesson) {
    return ctx.editMessageText("🎉 You've completed all lessons!", {
      parse_mode: "Markdown"
    });
  }

  ctx.editMessageText(
    `📘 *${lesson.title}*\n\n${lesson.content}`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("➡️ Next Lesson", "next_lesson")]
      ])
    }
  );
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
