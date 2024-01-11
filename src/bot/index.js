const { Telegraf, session } = require("telegraf");
const { BOT_TOKEN } = require("../shared/const.js");
const { start } = require("./commands/start.js");
const { Stage } = require("telegraf/scenes");
const { loginWizard } = require("./scenes/authscene.js");
const { routeProtector } = require("./middlewares/authProtector.js");

const bot = new Telegraf(BOT_TOKEN);

const stage = new Stage([
loginWizard  ]);

bot.use(session());
bot.use(stage.middleware())
bot.use(routeProtector);
bot.hears("Mijoz", async (ctx) => {
  await ctx.reply(` Nima gap mijoz manga qara mawitta ro'yxattan o'tvol! `);
});


bot.start(start);

module.exports = bot;

// BOT_TOKEN = 6820439791:AAEmVgYzQf-Rp0r8HgRs3uRFM7pTYzj1NXc
// API_URL = localhost:3000
// JWT_SECRET = process.env.JWT_SECRET
// JWT_EXPIRE = process.env.JWT_EXPIRE
// DATABASE_URL = process.env.DATABASE_URL
// DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
// PORT = 3000
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYm90L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVwQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpCLGVBQWUsR0FBRyxDQUFDO0FBRW5CLDZEQUE2RDtBQUM3RCwyQkFBMkI7QUFDM0Isc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsb0RBQW9EO0FBQ3BELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZWxlZ3JhZiB9IGZyb20gXCJ0ZWxlZ3JhZlwiO1xyXG5pbXBvcnQgeyBCT1RfVE9LRU4gfSBmcm9tIFwiLi4vc2hhcmVkL2NvbnN0LmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4vY29tbWFuZHMvc3RhcnQuanNcIjtcclxuXHJcbmNvbnN0IGJvdCA9IG5ldyBUZWxlZ3JhZihCT1RfVE9LRU4pO1xyXG5cclxuYm90LnN0YXJ0KHN0YXJ0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvdDtcclxuXHJcbi8vIEJPVF9UT0tFTiA9IDY4MjA0Mzk3OTE6QUFFbVZnWXpRZi1ScDByOEhnUnMzdVJGTTdwVFl6ajFOWGNcclxuLy8gQVBJX1VSTCA9IGxvY2FsaG9zdDozMDAwXHJcbi8vIEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXHJcbi8vIEpXVF9FWFBJUkUgPSBwcm9jZXNzLmVudi5KV1RfRVhQSVJFXHJcbi8vIERBVEFCQVNFX1VSTCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTFxyXG4vLyBEQVRBQkFTRV9QQVNTV09SRCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JEXHJcbi8vIFBPUlQgPSAzMDAwXHJcbiJdfQ==
