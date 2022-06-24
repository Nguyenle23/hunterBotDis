module.exports = (bot, message) => {
    const Discord = require('discord.js');
    const prefix = '-'; //the initial command
    if (!message.content.startsWith(prefix) || message.author.bot) return; //check the prefix start and message author is not bot
    const args = message.content.slice(prefix.length).split(/ +/); //check the space, ex: -icheck wiki
    const cmd = args.shift().toLowerCase(); //change all Uppercase to Lowercase
    const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (command) {
        command.run(bot, message, args, Discord);
    }
}