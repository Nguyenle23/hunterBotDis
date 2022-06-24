module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'nguyen', //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#CDAD00')
            .setTitle('Lê Nguyễn Bình Nguyên')
            .setURL('https://www.facebook.com/nguyenle23.iu/')
            .setAuthor('test', 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/287549751_1188588555270676_8298620179122771036_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H0_MpZa2l0EAX-fY9N5&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVJAPPf0WqxQZv-WRe_8o92gPabDrAToo0tTma15BuiYyQ&oe=62D9B2FA', 'https://www.facebook.com/nguyenle23.iu/')
            .setDescription('test')
            .setThumbnail('https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/287549751_1188588555270676_8298620179122771036_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H0_MpZa2l0EAX-fY9N5&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVJAPPf0WqxQZv-WRe_8o92gPabDrAToo0tTma15BuiYyQ&oe=62D9B2FA')
            // .addFields(
            //     { name: 'QUOC TE', value: 'MAY TINH' },
            //     { name: '\u200B', value: '\u200B' }, //xuong dong
            //     { name: 'Cot 1', value: 'LOL', inline: true },
            //     { name: 'Cot 2', value: 'CSGO', inline: true },
            // )
            // .addField('Cot 3', 'PUGB', true)
            .setImage('https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/283971497_3177989702465730_2948486777908842303_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IZIKQ4leH5QAX_K2ML7&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9N-P4fYH6dsMah083XzEf2fzHrSS2ls-47LuQkbPjinA&oe=62B9B287')
            .setTimestamp()
            .setFooter('Been', 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/287549751_1188588555270676_8298620179122771036_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H0_MpZa2l0EAX-fY9N5&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVJAPPf0WqxQZv-WRe_8o92gPabDrAToo0tTma15BuiYyQ&oe=62D9B2FA');

        message.channel.send({ embeds: [embed] });

    }

}