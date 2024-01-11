// import path from "path";
import app from "./app/index.js";
import bot from "./bot/index.js";
// import TelegrafI18n from "telegraf-i18n";
import { API_URL, ENVIRONMENT } from "./shared/const.js";

// const i18n = new TelegrafI18n({
//   defaultLanguage: "en",
//   allowMissing: false, // Default true
//   directory: path.resolve("./", "locales"),
// });

// Also you can provide i18n data directly
// i18n.loadLocale("en", { greeting: "Hello!" });

app.listen(3000, () => console.log("Server is listening in port 3000"));

app.get("/",(req,res) =>{
    res.send("Hello!")
})

// if (ENVIRONMENT === "production") {
//   console.log("Bot is running in production");

//   app.use(bot.webhookCallback("/bot"));
//   bot.telegram.setWebhook(`${API_URL}/bot`);
// } else {
//   console.log("Bot is running in development");
//   bot.launch();
// }
