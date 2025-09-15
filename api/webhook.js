import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "../lessons.js";

if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing. Please check config.js");
}

const bot = new Telegraf(BOT_TOKEN);
const userProgress = {};

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
  try {
    userProgress[ctx.from.id] = 0;
    const lesson = getLesson(ctx.from.id);
    if (!lesson) return ctx.reply("⚠️ No lessons found for Novice level.");
    await ctx.reply(
      `📘 *${lesson.title}*\n\n${lesson.content.join("\n\n")}`,
      {
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [[{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]]
        }
      }
    );
  } catch (err) {
    console.error("Error in /start:", err);
  }
});

bot.action("next_lesson", async (ctx) => {
  try {
    const lesson = nextLesson(ctx.from.id);
    if (!lesson) {
      return ctx.editMessageText("🎉 You've completed all lessons!");
    }
    await ctx.editMessageText(
      `📘 *${lesson.title}*\n\n${lesson.content.join("\n\n")}`,
      {
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [[{ text: "➡️ Next Lesson", callback_data: "next_lesson" }]]
        }
      }
    );
  } catch (err) {
    console.error("Error in next_lesson:", err);
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
