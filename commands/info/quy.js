module.exports = {
    name: 'quy',
    description: "Show quy's info",
    category: 'info',
    aliases: ['q'],
    run: async(bot, message, args, Discord) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#CDAD00')
            .setTitle('Phan Trọng Quý')
            .setURL('https://www.facebook.com/quy.phantrong.3')
            .setAuthor('Bar bủng triết lý', 'https://lh3.googleusercontent.com/pw/AM-JKLV_NjBzDApwut96SByFS4U2VvHxd7Xpvv7oSTfV9oP3aLCtGQ66pQrrAivZD0u8awDLZTZGJ8lyLNJz4TwjxIRzMl018Yqg4RaDGzd6TQS1slL0oPKFjQ7X1kpSgz9Wslk6-NuJff0SFUici5Gs0J2wDg=w733-h977-no?authuser=0', 'https://www.facebook.com/quy.phantrong.3')
            .setDescription('Ẩu rồi đó')
            .setThumbnail('https://lh3.googleusercontent.com/pw/AM-JKLV_NjBzDApwut96SByFS4U2VvHxd7Xpvv7oSTfV9oP3aLCtGQ66pQrrAivZD0u8awDLZTZGJ8lyLNJz4TwjxIRzMl018Yqg4RaDGzd6TQS1slL0oPKFjQ7X1kpSgz9Wslk6-NuJff0SFUici5Gs0J2wDg=w733-h977-no?authuser=0')
            .setImage('https://lh3.googleusercontent.com/pw/AM-JKLVf63ScqBiNrtlmAhxUsjYpUzlV_yDmJltOc1F_uw-01CphPUyWv9M1HH3kc5bVkbkmbrjRvwePe-532hqjStr1LzrQcSlMhB_i3l7sXGCZvBD34aOYLw7W0Q0T8KV-mDa6rXi9flULO_E7744RJgyPjQ=w728-h977-no?authuser=0')
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

        message.channel.send({ embeds: [embed] });
    }
}