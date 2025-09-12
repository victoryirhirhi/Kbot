import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "../lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// In-memory user progress
const userProgress = {};

// Start command
bot.start((ctx) => {
  ctx.reply(
    `Welcome to Crypto Academy, ${ctx.from.first_name}!\nChoose your level:`,
    Markup.inlineKeyboard([
      [
        Markup.button.callback("Beginner", "setlevel:Beginner"),
        Markup.button.callback("Intermediate", "setlevel:Intermediate"),
        Markup.button.callback("Advanced", "setlevel:Advanced")
      ]
    ])
  );
});

// Handle level selection
bot.action(/setlevel:(.+)/, (ctx) => {
  const level = ctx.match[1];
  userProgress[ctx.from.id] = { level, index: 0 };
  const lesson = LESSONS[level][0];
  ctx.editMessageText(`*${lesson.title}*\n\n${lesson.content}`, { parse_mode: "Markdown" });
});

// Navigation buttons
bot.action(/lesson:(.+):(\d+)/, (ctx) => {
  const [ , level, idx ] = ctx.match;
  const index = parseInt(idx);
  userProgress[ctx.from.id].index = index;
  const lesson = LESSONS[level][index];

  const buttons = [];
  if(index > 0) buttons.push(Markup.button.callback("⬅ Prev", `lesson:${level}:${index-1}`));
  if(index < LESSONS[level].length-1) buttons.push(Markup.button.callback("Next ➡", `lesson:${level}:${index+1}`));

  ctx.editMessageText(`*${lesson.title}*\n\n${lesson.content}`, {
    parse_mode: "Markdown",
    reply_markup: Markup.inlineKeyboard([buttons])
  });
});

// Vercel serverless handler
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body, res);
      res.status(200).send("OK");
    } catch(e) {
      console.error(e);
      res.status(500).send("Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
