
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'bach',  //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#A8B94B')
        .setTitle('Tường Bách')
        .setURL('https://www.facebook.com/lecay4')
        .setAuthor('Hunter Info', 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/64905361_2421544291398132_1567324868725178368_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=O8MfEMVgSusAX9gmojx&tn=6DzfzS1iT6g0dtK5&_nc_ht=scontent.fsgn8-1.fna&oh=966047e61cfcb86281820f065f7f0353&oe=61840510', 'https://www.facebook.com/lecay4')
        .setDescription('Footballer')
        .setThumbnail('https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/64905361_2421544291398132_1567324868725178368_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=O8MfEMVgSusAX9gmojx&tn=6DzfzS1iT6g0dtK5&_nc_ht=scontent.fsgn8-1.fna&oh=966047e61cfcb86281820f065f7f0353&oe=61840510')
        .addFields(
            { name: 'RMIT', value: 'Civil Engineering' },
            { name: '\u200B', value: '\u200B' }, //xuong dong
            { name: 'Cot 1', value: 'LOL', inline: true },
            { name: 'Cot 2', value: 'CSGO', inline: true },
        )
        .addField('Cot 3', 'PUGB', true)
        .setImage('https://lh3.googleusercontent.com/pw/AM-JKLU4v4ucjWYc0tL8exOFzFgvL7HBV7n4_sEUQC6VF3zD-UIaiBbFS_UMUxSgAvrr_RDgUtT1sAyinwxd5VDU_AGl4yCol0FZ-TZx5BAs1HV_DD60wTqAEGPwg8HX4qcWCTTGRkZyVdIMpfSoGc5-HE4cuQ=s977-no?authuser=0')
        .setTimestamp()
        .setFooter('Batch', 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/64905361_2421544291398132_1567324868725178368_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=O8MfEMVgSusAX9gmojx&tn=6DzfzS1iT6g0dtK5&_nc_ht=scontent.fsgn8-1.fna&oh=966047e61cfcb86281820f065f7f0353&oe=61840510');

        message.channel.send({embeds: [embed]});
        
    }
    
}