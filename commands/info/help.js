module.exports = {
    name: 'help',
    description: "Show all commands",
    category: 'info',
    aliases: ['h'],
    run: async(bot, message, args, Discord) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#CCC333  ')
            .setTitle('List of commands')
            .addFields({ name: '-help', value: 'Show all the commands' }, { name: '-avatar <name_user_wanted>', value: 'Show the avatar of who is tagged' }, { name: '-your_name', value: 'Show your all information' }, { name: '-clear <number_line>', value: 'Delete the number_line you want' }, )
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

        message.channel.send({ embeds: [embed] });
    }
}