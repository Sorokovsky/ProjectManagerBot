import TelegramBot from "node-telegram-bot-api";
import { commands } from './commands';
export async function startBot(bot:TelegramBot, chatId:number):Promise<TelegramBot.Message> {
    let text:string = `Цей телеграм бот створено для швидкого доступу до ваших веб-проектів. \n`;
    commands.forEach(el => {
        text += `${el.command}-${el.description} \n`;
    });
    return await bot.sendMessage(chatId, text);
}