import { Telegraf } from "telegraf"
import { BOT_TOKEN } from "../shared/const"

 

const bot = new Telegraf(BOT_TOKEN)

 

export default bot