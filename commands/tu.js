
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'tu',  //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#E1D2BC')
        .setTitle('Anh Tú')
        .setURL('https://www.facebook.com/profile.php?id=100007531652719')
        .setAuthor('Hunter Info', 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/133109460_2725670234360672_997130947759329917_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=hccg_bhqxyAAX9hTrvr&_nc_ht=scontent.fsgn8-1.fna&oh=b66ffb39b416c8abe8b7390ead1f7519&oe=61844801', 'https://www.facebook.com/profile.php?id=100007531652719')
        .setDescription('Tú Dancer')
        .setThumbnail('https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/133109460_2725670234360672_997130947759329917_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=hccg_bhqxyAAX9hTrvr&_nc_ht=scontent.fsgn8-1.fna&oh=b66ffb39b416c8abe8b7390ead1f7519&oe=61844801')
        .addFields(
            { name: 'QUOC TE', value: 'Quan tri' },
            { name: '\u200B', value: '\u200B' }, //xuong dong
            { name: 'Cot 1', value: 'LOL', inline: true },
            { name: 'Cot 2', value: 'CSGO', inline: true },
        )
        .addField('Cot 3', 'PUGB', true)
        .setImage('https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/133712815_2731277817133247_838581779251050701_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WILx8_bSi5EAX9D4_k5&tn=6DzfzS1iT6g0dtK5&_nc_ht=scontent.fsgn8-2.fna&oh=a5ae28ddd0fc2877706237f960cb576d&oe=6183AB69')
        .setTimestamp()
        .setFooter('Tus', 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/133109460_2725670234360672_997130947759329917_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=hccg_bhqxyAAX9hTrvr&_nc_ht=scontent.fsgn8-1.fna&oh=b66ffb39b416c8abe8b7390ead1f7519&oe=61844801');

        message.channel.send({embeds: [embed]});
        
    }
    
}