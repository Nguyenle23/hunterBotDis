module.exports = {
    name: 'avatar',
    description: "Show avatar user",
    category: 'info',
    aliases: ['av'],
    run: async(bot, message, args, Discord) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        const embed = new Discord.MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar of ${member.displayName}`)

        message.channel.send({ embeds: [embed] });
    }
}