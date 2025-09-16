import bot from "../bot/bot.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("Webhook is live");
  }
  if (req.method === "POST") {
    try {
      await bot.handleUpdate(req.body);
      return res.status(200).end();
    } catch (err) {
      console.error("Webhook handler error:", err);
      return res.status(500).send("Bot error");
    }
  }
  res.status(405).send("Method Not Allowed");
}
