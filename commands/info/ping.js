module.exports = {
    name: 'ping',
    description: 'Ping!',
    category: 'info',
    aliases: ['p'],
    run: async(bot, message, args) => {
        message.reply(`Server has \`${bot.ws.ping}ms\``);
    }
}