module.exports = {
    name: 'hello',
    description: "this is a ping command!",
    category: 'info',
    aliases: ['hi', 'xinchao', 'chao'],
    run: async(bot, message, args, Discord) => {
        var word = ['Hi', 'Xin chào', 'Chào', 'Hello'];
        var randomHi = word[Math.floor(Math.random() * word.length)];
        message.reply(`${randomHi}, **${message.author.username}**`);
    }
}