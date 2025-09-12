import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../config.js";

const bot = new Telegraf(BOT_TOKEN);

export default async function handler(req, res) {
  if(req.method === "GET") {
    return res.status(200).send("Webhook function exists!");
  }
  if(req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
