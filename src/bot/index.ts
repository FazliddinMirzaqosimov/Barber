import { Telegraf } from "telegraf";
import { BOT_TOKEN } from "../shared/const.js";
import { start } from "./commands/start.js";

const bot = new Telegraf(BOT_TOKEN);

bot.start(start);

export default bot;

// BOT_TOKEN = 6820439791:AAEmVgYzQf-Rp0r8HgRs3uRFM7pTYzj1NXc
// API_URL = localhost:3000
// JWT_SECRET = process.env.JWT_SECRET
// JWT_EXPIRE = process.env.JWT_EXPIRE
// DATABASE_URL = process.env.DATABASE_URL
// DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
// PORT = 3000
