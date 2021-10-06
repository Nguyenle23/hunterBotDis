
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'cuong',  //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()
        // .setColor('#304281')
        // .setTitle('User Info')
        // .setURL('https://www.facebook.com/nguyenle23.iu/')
        // .setAuthor('Been','https://www.facebook.com/nguyenle23.iu/')
        // .setDescription('thisisaembedforserverrule')
        // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        // .addFields(
        //     { name: 'Regular field title', value: 'Some value here' },
        //     { name: '\u200B', value: '\u200B' },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        // )
        // .addField('Username', message.author.tag) //username + name - id user
        // .addField('Server', message.guild.name) //server + tên server
        // .setColor(0xFF8AFF)
       
        // .setFooter(message.author.tag);

        .setColor('#CDAD00')
        .setTitle('Xuân Cường')
        .setURL('https://www.facebook.com/xuancuong1001')
        .setAuthor('Hunter Info', 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/192229592_1484258985254596_2795373489392076563_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fK4ZB_RIK1MAX-opshV&_nc_ht=scontent.fsgn13-2.fna&oh=dd66f9512d09159fc26236691939cd02&oe=61838BD5', 'https://www.facebook.com/xuancuong1001')
        .setDescription('Cun cac')
        .setThumbnail('https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/192229592_1484258985254596_2795373489392076563_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fK4ZB_RIK1MAX-opshV&_nc_ht=scontent.fsgn13-2.fna&oh=dd66f9512d09159fc26236691939cd02&oe=61838BD5')
        .addFields(
            { name: 'BACH KHOA', value: 'DAU KHI' },
            { name: '\u200B', value: '\u200B' }, //xuong dong
            { name: 'Cot 1', value: 'LOL', inline: true },
            { name: 'Cot 2', value: 'CSGO', inline: true },
        )
        .addField('Cot 3', 'PUGB', true)
        .setImage('https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/74524227_2489589968025163_2302712970192355328_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=cH4tpUFXNBsAX80zlU3&_nc_ht=scontent.fsgn4-1.fna&oh=11cc6dc03596aad845fd17c3217b2e5d&oe=6182AF50')
        .setTimestamp()
        .setFooter('Cừn', 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/192229592_1484258985254596_2795373489392076563_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fK4ZB_RIK1MAX-opshV&_nc_ht=scontent.fsgn13-2.fna&oh=dd66f9512d09159fc26236691939cd02&oe=61838BD5');

        message.channel.send({embeds: [embed]});
        
    }
    
}