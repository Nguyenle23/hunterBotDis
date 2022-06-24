const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Show your avatar or other user',
    type: 'CHAT_INPUT',
    options: [{
        name: 'user',
        description: 'Name of the user',
        type: 'USER',
        required: false,
    }],
    run: async(bot, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${user.tag}`);
        interaction.reply({ embeds: [embed] });
    },
};