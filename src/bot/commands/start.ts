import { Context } from "telegraf";
import { main_keyboards } from "../keyboards/index.js";

export const start = async (ctx: Context) => {
  await ctx.reply(
    "Assalomu aleykum bratishka nima gap. Bittasini tanla Klentmisan yoki Sartaroshmisan!",
    {
      reply_markup:main_keyboards,
    }
  );
};
