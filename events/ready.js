module.exports = (bot) => {
    const { version } = require('discord.js');

    console.log('Hunter Bot is online! ' + version);
    bot.user.setActivity("with depression", {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
    });
}