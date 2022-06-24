module.exports = {
    name: 'kick',
    category: 'mod',
    run: async(bot, message, args) => {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('You don\'t have permission to kick');
        const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!toKick) return message.reply('Enter a valid member');
        if (toKick.id == message.author.id) return message.reply('You can\'t kick yourself');
        const reason = args.slice(1).join(' ');
        try {
            toKick.kick(reason);
            message.reply(`Kick successfully ${toKick.user.tag}`);
        } catch (err) {
            message.reply(`Error: ${err}`);
            console.error(err);
        }
    },
};