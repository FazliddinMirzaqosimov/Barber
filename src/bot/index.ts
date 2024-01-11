import { Telegraf } from "telegraf"
import { BOT_TOKEN } from "../shared/const.js"

 

const bot = new Telegraf(BOT_TOKEN)

 

export default bot