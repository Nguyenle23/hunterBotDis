module.exports = (bot, interaction) => {
    if (!interaction.isCommand()) return;
    const command = bot.interactions.get(interaction.commandName);
    if (!command) interaction.reply('Command not found.');
    command.run(bot, interaction);
}