
// Require the necessary discord.js classes
const Discord = require('discord.js');
const { Client, Intents, Attachment, Message, MessageEmbed  } = require('discord.js');
//const config = require('./config.json');

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // const bot = new Client();

const prefix = '-';  //the initial command

const fs = require('fs'); //connect to order js file

bot.commands = new Discord.Collection();

//make sure all file are js, for loop to check 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

// const ytdl = require("ytdl-core");

const { version } = require('discord.js');

// var version = '1.2';

// var servers = {};

// When the client is ready, run this code (only once)
bot.once('ready', () => {
    console.log('Hunter Bot is online!' + version);

    // Set the client user's presence
    bot.user.setPresence({ 
        activities: [{ 
            name: 'Hello World',
            type: 'STREAMING'
        }], 
        status: 'online' });
});

//command for bot to respond my message
bot.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot ) return; //check the prefix start with - and /

    const args = message.content.slice(prefix.length).split(/ +/); //check the space, ex: -icheck wiki

    const command = args.shift().toLowerCase(); //change all Uppercase to Lowercase

    if(command === 'hello'){
        bot.commands.get('hello').execute(message, args);
        message.react('🤘');
    } else if(command === 'nguyen'){
        bot.commands.get('nguyen').execute(message, args, Discord);
        message.react('🥚');
    } else if(command === 'cuong'){
        bot.commands.get('cuong').execute(message, args, Discord);
    } else if(command === 'tu'){
        bot.commands.get('tu').execute(message, args, Discord);
    } else if(command === 'quy'){
        bot.commands.get('quy').execute(message, args, Discord);
    } else if(command === 'bach'){
        bot.commands.get('bach').execute(message, args, Discord);
    } else if (command === 'clear') { //clear messsages only 14days 
        bot.commands.get('clear').execute(message, args);
    } 
    /*else if(command === 'mute') {
        bot.commands.get('mute').execute(message, args);
    } 
    else if(command === 'kick') {
        bot.commands.get('kick').execute(message, args);
    } else if(command === 'ban') {
        bot.commands.get('ban').execute(message, args);
    }*/
});

// Login to Discord with your client's token
bot.login(process.env.DISCORD_BOT_TOKEN);