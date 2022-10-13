import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { commands } from './commands';
import { startBot } from './functions';
dotenv.config();
const bot = new TelegramBot(process.env.TOKEN!, {polling: true});
const start = ():void => {
   bot.setMyCommands(commands);
    bot.on('message',  async (msg) => {
       switch(msg.text){
        case "/start":
           await startBot(bot, msg.chat.id)
           break;
        case "/projects":
            return await bot.sendMessage(msg.chat.id, "Список проєктів");
       }
    });
}
start();