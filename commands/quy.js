
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'quy',  //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#5A94F4')
        .setTitle('Trọng Quý')
        .setURL('https://www.facebook.com/quy.phantrong.3')
        .setAuthor('Hunter Info', 'https://lh3.googleusercontent.com/pw/AM-JKLVf63ScqBiNrtlmAhxUsjYpUzlV_yDmJltOc1F_uw-01CphPUyWv9M1HH3kc5bVkbkmbrjRvwePe-532hqjStr1LzrQcSlMhB_i3l7sXGCZvBD34aOYLw7W0Q0T8KV-mDa6rXi9flULO_E7744RJgyPjQ=w728-h977-no?authuser=0', 'https://www.facebook.com/quy.phantrong.3')
        .setDescription('Saler')
        .setThumbnail('https://lh3.googleusercontent.com/pw/AM-JKLVf63ScqBiNrtlmAhxUsjYpUzlV_yDmJltOc1F_uw-01CphPUyWv9M1HH3kc5bVkbkmbrjRvwePe-532hqjStr1LzrQcSlMhB_i3l7sXGCZvBD34aOYLw7W0Q0T8KV-mDa6rXi9flULO_E7744RJgyPjQ=w728-h977-no?authuser=0')
        .addFields(
            { name: 'GTVT', value: 'Boat' },
            { name: '\u200B', value: '\u200B' }, //xuong dong
            { name: 'Cot 1', value: 'LOL', inline: true },
            { name: 'Cot 2', value: 'CSGO', inline: true },
        )
        .addField('Cot 3', 'PUGB', true)
        .setImage('https://lh3.googleusercontent.com/pw/AM-JKLWsQcXLemrfGwUJtGMNWHYLnqkLT4cbeygAo5dImvDMg5EenJ_B9hX_6JY8KZoYz79Zc3u3DlY7BWeA-a8naHcj23i_3ZyHU06XQdBYNtIC_og7uOWTBerRfPFWkrsRWzkndZ4xhOt8S_GETZtMdm-R4A=w1303-h977-no?authuser=0')
        .setTimestamp()
        .setFooter('Wys', 'https://lh3.googleusercontent.com/pw/AM-JKLVf63ScqBiNrtlmAhxUsjYpUzlV_yDmJltOc1F_uw-01CphPUyWv9M1HH3kc5bVkbkmbrjRvwePe-532hqjStr1LzrQcSlMhB_i3l7sXGCZvBD34aOYLw7W0Q0T8KV-mDa6rXi9flULO_E7744RJgyPjQ=w728-h977-no?authuser=0');

        message.channel.send({embeds: [embed]});
        
    }
    
}