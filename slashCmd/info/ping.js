module.exports = {
    name: 'ping',
    description: 'Show the ping of the bot',
    type: 'CHAT_INPUT',
    run: async(bot, interaction) => {
        interaction.reply(`Server has \`${bot.ws.ping}ms\``);
    },
}