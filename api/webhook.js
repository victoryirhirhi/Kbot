import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../config.js";
import { LESSONS } from "../lessons.js";

const bot = new Telegraf(BOT_TOKEN);

// In-memory progress: { [userId]: { level, index } }
const progress = {};

bot.start((ctx) => {
  ctx.reply("Welcome to Crypto Academy! Choose your level:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🟢 Novice", callback_data: "level:novice" }],
        [{ text: "🟡 Intermediate", callback_data: "level:intermediate" }],
        [{ text: "🔴 Professional", callback_data: "level:professional" }]
      ]
    }
  });
});

bot.on("callback_query", (ctx) => {
  const data = ctx.callbackQuery.data;
  const userId = ctx.from.id;

  if (data.startsWith("level:")) {
    const level = data.split(":")[1];
    progress[userId] = { level, index: 0 };
    sendLesson(ctx, userId);
  } else if (data === "next") {
    progress[userId].index++;
    sendLesson(ctx, userId);
  } else if (data === "prev") {
    progress[userId].index--;
    sendLesson(ctx, userId);
  } else if (data === "menu") {
    ctx.reply("Choose your level:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🟢 Novice", callback_data: "level:novice" }],
          [{ text: "🟡 Intermediate", callback_data: "level:intermediate" }],
          [{ text: "🔴 Professional", callback_data: "level:professional" }]
        ]
      }
    });
  }

  ctx.answerCbQuery();
});

function sendLesson(ctx, userId) {
  const { level, index } = progress[userId];
  const lesson = LESSONS[level][index];

  const buttons = [];
  if (index > 0) buttons.push({ text: "⬅ Prev", callback_data: "prev" });
  if (index < LESSONS[level].length - 1)
    buttons.push({ text: "Next ➡", callback_data: "next" });

  ctx.editMessageText(`*${lesson.title}*\n\n${lesson.content}`, {
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [buttons, [{ text: "📖 Menu", callback_data: "menu" }]]
    }
  });
}

export default async function handler(req, res) {
  if (req.method === "GET") return res.status(200).send("Webhook is live!");
  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
