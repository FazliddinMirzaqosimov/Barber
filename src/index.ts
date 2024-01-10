 

 

import app from "./app/index";
import bot from "./bot/index";
 
app.listen(3000, () => console.log("Server is listening in port 3000"));
bot.launch().then(() => console.log("Bot is running"));
