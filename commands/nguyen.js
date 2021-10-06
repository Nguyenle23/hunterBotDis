
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'nguyen',  //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#DCD8D0')
        .setTitle('Nguyên Lê')
        .setURL('https://www.facebook.com/nguyenle23.iu/')
        .setAuthor('Hunter Info', 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/84327044_2585885031693777_4215093613102628864_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tvHjnnK1pOIAX-MlWB6&_nc_ht=scontent.fsgn13-2.fna&oh=732d836ebd355801e8675be4160e2b13&oe=618153B6', 'https://www.facebook.com/nguyenle23.iu/')
        .setDescription('Mr.Been')
        .setThumbnail('https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/84327044_2585885031693777_4215093613102628864_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tvHjnnK1pOIAX-MlWB6&_nc_ht=scontent.fsgn13-2.fna&oh=732d836ebd355801e8675be4160e2b13&oe=618153B6')
        .addFields(
            { name: 'QUOC TE', value: 'MAY TINH' },
            { name: '\u200B', value: '\u200B' }, //xuong dong
            { name: 'Cot 1', value: 'LOL', inline: true },
            { name: 'Cot 2', value: 'CSGO', inline: true },
        )
        .addField('Cot 3', 'PUGB', true)
        .setImage('https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/84327044_2585885031693777_4215093613102628864_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tvHjnnK1pOIAX-MlWB6&_nc_ht=scontent.fsgn13-2.fna&oh=732d836ebd355801e8675be4160e2b13&oe=618153B6')
        .setTimestamp()
        .setFooter('Been', 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/84327044_2585885031693777_4215093613102628864_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tvHjnnK1pOIAX-MlWB6&_nc_ht=scontent.fsgn13-2.fna&oh=732d836ebd355801e8675be4160e2b13&oe=618153B6');

        message.channel.send({embeds: [embed]});
        
    }
    
}