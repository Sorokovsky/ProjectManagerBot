interface iCommand{
    command: string;
    description: string;
}
export const commands:iCommand[] = [
    {command: "/start", description: "Я сховищн ваших прєктів"},
    {command: "/projects", description: "Список проєктів"}
]