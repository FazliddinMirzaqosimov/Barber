 

 

import app from "./app/index.js";
import bot from "./bot/index.js";
 
app.listen(3000, () => console.log("Server is listening in port 3000"));
bot.launch().then(() => console.log("Bot is running"));
