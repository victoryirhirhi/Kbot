Crypto Academy Bot (Vercel-ready) - Novice Level (Refactor)

Files in this package:
- api/webhook.js         -> Vercel serverless handler (POST updates to bot)
- bot/bot.js             -> Telegraf bot logic (handlers, navigation, quiz)
- bot/lessons.js         -> Lessons data (Novice level parts; quizzes at level-end)
- config.js              -> BOT_TOKEN (already populated)
- package.json           -> Node package configuration (telegraf dependency)

Instructions:
1. Upload this project to a GitHub repository or directly to Vercel.
2. Ensure your config.js contains your bot token (it already does in this package).
3. Deploy on Vercel (root must be the folder containing package.json and api/).
4. Set the Telegram webhook (replace <TOKEN> and <VERCEL_URL>):
   https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<your-vercel-app>.vercel.app/api/webhook
5. Open your bot in Telegram and send /start to test.

Notes:
- This uses in-memory storage for progress. Data is lost on redeploys. For persistence, connect a database.
- The package uses telegraf v4.x which is compatible with Vercel serverless functions.
