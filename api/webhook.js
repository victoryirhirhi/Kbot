import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../config.js";

const bot = new Telegraf(BOT_TOKEN);

// Add a simple start command
bot.start((ctx) => ctx.reply("Welcome to Crypto Academy Bot 🎓"));

// Add a generic message handler
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("Webhook function exists!");
  }

  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      return res.status(200).end();
    } catch (error) {
      console.error("Bot error:", error);
      return res.status(500).send("Bot error");
    }
  } else {
    return res.status(405).send("Method Not Allowed");
  }
}
