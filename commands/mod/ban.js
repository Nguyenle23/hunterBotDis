module.exports = {
    name: 'ban',
    category: 'mod',
    run: async(bot, message, args) => {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('You don\'t have permission to kick');
        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!toBan) return message.reply('Enter a valid member');
        if (toBan.id == message.author.id) return message.reply('You can\'t ban yourself!');
        const reason = args.slice(1).join(' ');
        try {
            toBan.ban({ reason });
            message.reply(`Ban successfully${toBan.user.tag}`);
        } catch (err) {
            message.reply(`Error: ${err}`);
            console.error(err);
        }
    },
};