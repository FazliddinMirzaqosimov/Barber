const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const TelegrafI18n = require("telegraf-i18n");
const bot = require("./bot");
const { ENVIRONMENT, API_URL, DATABASE_URL } = require("./shared/const");
const { default: mongoose } = require("mongoose");
const express = require("express");

const app = express();

const localesDirectory = path.resolve(__dirname, "locales");

const i18n = new TelegrafI18n({
  defaultLanguage: "en",
  allowMissing: false, // Default true
  directory: path.resolve(localesDirectory),
});

mongoose.connect(DATABASE_URL).then(() => {
  console.log("Database connected!");
});

i18n.loadLocale("en", { greeting: "Hello!" });

app.listen(3000, () => console.log("Server is listening in port 3000"));
app.get("/", (req, res) => {
  res.send("Hello!");
});

if (ENVIRONMENT === "production") {
  console.log("Bot is running in production");
  app.use(bot.webhookCallback("/bot"));
  bot.telegram.setWebhook(`${API_URL}/bot`);
} else {
  console.log("Bot is running in development");
  bot.startPolling();
}
