module.exports = {
    name: 'tu',
    description: "Show tu's info",
    category: 'info',
    aliases: ['t'],
    run: async(bot, message, args, Discord) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#CDAD00')
            .setTitle('Nguyễn Thọ Anh Tú')
            .setURL('https://www.facebook.com/profile.php?id=100007531652719')
            .setAuthor('Bôi xàm loz', 'https://lh3.googleusercontent.com/pw/AM-JKLWeUKMkOZ7A64HBfE0-3EnF_hhsVrak5cddAawwG5SaLwlEjPbnkiQ4XrCjYLxlRM9nC83vYPr4hBQk1YPYMVzWxXprOpaU4qVZjbUq5LT1ssc7BZh2fcyoQItLWydDS9p9cNKhtctq5hoYOSVgyK_nBg=w608-h977-no?authuser=0', 'https://www.facebook.com/profile.php?id=100007531652719')
            .setDescription('"Ý nó lại xàm loz"')
            .setThumbnail('https://lh3.googleusercontent.com/pw/AM-JKLWeUKMkOZ7A64HBfE0-3EnF_hhsVrak5cddAawwG5SaLwlEjPbnkiQ4XrCjYLxlRM9nC83vYPr4hBQk1YPYMVzWxXprOpaU4qVZjbUq5LT1ssc7BZh2fcyoQItLWydDS9p9cNKhtctq5hoYOSVgyK_nBg=w608-h977-no?authuser=0')
            .setImage('https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/287299973_1820208878316994_3452296532832034285_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=d4B_xlcCX-8AX9OxVPf&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJ8dySaf50_QXmAbsTouXswETctX77eT4asvnRVk_8VKg&oe=62DA3685')
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

        message.channel.send({ embeds: [embed] });
    }

}