import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import lessons from "../lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// Track users' progress
const userProgress = {};

function getLesson(userId) {
  const index = userProgress[userId] || 0;
  return lessons[index];
}

function getNextLesson(userId) {
  userProgress[userId] = (userProgress[userId] || 0) + 1;
  return getLesson(userId);
}

bot.start(async (ctx) => {
  userProgress[ctx.from.id] = 0;
  const lesson = getLesson(ctx.from.id);
  if (!lesson) return ctx.reply("No lessons found.");
  await ctx.reply(
    `📘 *${lesson.title}*\n\n${lesson.content}`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]]
      }
    }
  );
});

bot.action("next_lesson", async (ctx) => {
  const lesson = getNextLesson(ctx.from.id);

  if (!lesson) {
    return ctx.editMessageText("🎉 You've completed all lessons!");
  }

  await ctx.editMessageText(
    `📘 *${lesson.title}*\n\n${lesson.content}`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]]
      }
    }
  );
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("Webhook function exists!");
  }
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).end();
    } catch (err) {
      console.error("Error handling update:", err);
      res.status(500).send("Bot error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
