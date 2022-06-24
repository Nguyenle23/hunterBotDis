const Discord = require('discord.js');
const { Client, Intents, Attachment, Message, MessageEmbed, Collection } = require('discord.js');
const Distube = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] }); // const bot = new Client();
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = new Collection();
bot.interactions = new Collection();

bot.distube = new Distube.default(bot, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()],
});
module.exports = bot;

['command', 'event', 'slashCmd'].forEach(handler => require(`./handlers/${handler}`)(bot));

// Login to Discord with your client's token
bot.login(process.env.DISCORD_BOT_TOKEN);