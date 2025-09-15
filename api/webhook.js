import { Telegraf, Markup } from "telegraf";
import { BOT_TOKEN } from "../config.js";

const bot = new Telegraf(BOT_TOKEN);

// 📌 Start Command - Show Menu
bot.start((ctx) => {
  return ctx.reply(
    "📚 Welcome to Crypto Academy!\nChoose a topic to begin learning:",
    Markup.inlineKeyboard([
      [Markup.button.callback("📖 What is Crypto?", "lesson_intro")],
      [Markup.button.callback("💱 Trading Basics", "lesson_trading")],
      [Markup.button.callback("🪙 Blockchain & Web3", "lesson_blockchain")],
      [Markup.button.callback("📊 Risk Management", "lesson_risk")]
    ])
  );
});

// 📘 Lessons
bot.action("lesson_intro", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    "💡 *What is Crypto?*\n\nCryptocurrency is digital money secured by cryptography, decentralized, and powered by blockchain technology.",
    { parse_mode: "Markdown" }
  );
});

bot.action("lesson_trading", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    "📈 *Trading Basics*\n\nTrading involves buying crypto low and selling high. Learn about spot, futures, and leverage trading gradually.",
    { parse_mode: "Markdown" }
  );
});

bot.action("lesson_blockchain", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    "🪙 *Blockchain & Web3*\n\nBlockchain is a decentralized ledger. Web3 brings ownership, smart contracts, and decentralization to the internet.",
    { parse_mode: "Markdown" }
  );
});

bot.action("lesson_risk", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    "⚠️ *Risk Management*\n\nNever risk more than you can lose. Use stop losses, proper position sizing, and avoid emotional trading.",
    { parse_mode: "Markdown" }
  );
});

// 📩 Generic fallback
bot.on("text", (ctx) => {
  ctx.reply("Type /start to open the main menu 📚");
});

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
