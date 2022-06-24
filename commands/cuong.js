module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'cuong', //command === ten
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
            .setTitle('Đặng Xuân Cường')
            .setURL('https://www.facebook.com/xuancuong1001')
            .setAuthor('Cừn ngu', 'https://lh3.googleusercontent.com/pw/AM-JKLUJata9Nu0L0NqYpHGds834qq5LfRuXOqvgu38HqE8aV3rfq3Bp5kZcm3Ih3KVpxVPzN8J2wHv3ayMFkpEaq3IQewZLdSRPoMJAyWfnvkOE-bpCiZiSKsnp8OuHOfEuOSEmGref3spUwASuI8Py89fLzA=w720-h918-no?authuser=0', 'https://www.facebook.com/xuancuong1001')
            .setDescription('Hoa có chậu')
            .setThumbnail('https://lh3.googleusercontent.com/pw/AM-JKLUJata9Nu0L0NqYpHGds834qq5LfRuXOqvgu38HqE8aV3rfq3Bp5kZcm3Ih3KVpxVPzN8J2wHv3ayMFkpEaq3IQewZLdSRPoMJAyWfnvkOE-bpCiZiSKsnp8OuHOfEuOSEmGref3spUwASuI8Py89fLzA=w720-h918-no?authuser=0')
            // .addFields({ name: 'RMIT', value: 'Civil Engineering' }, { name: '\u200B', value: '\u200B' }, //xuong dong
            //     // { name: 'Cot 1', value: 'LOL', inline: true }, { name: 'Cot 2', value: 'CSGO', inline: true },
            // )
            // .addField('Cot 3', 'PUGB', true)
            .setImage('https://lh3.googleusercontent.com/pw/AM-JKLXLFT4KEeIvSHfj-oNW9ZwLwULoCKm2lzjhHvIJsVHyPRfhZz0zim19nl5dOGiyBoBucEVAsQU2XAZ0RyYhV7FxrmSvnbxl8sC7D5yri8nePAiQnZCvBqcSOQMXMbgJogGLMwLOVDso9n9ocRKkzH6oHA=w733-h977-no?authuser=0')
            .setTimestamp()
            .setFooter('Cun', 'https://lh3.googleusercontent.com/pw/AM-JKLUJata9Nu0L0NqYpHGds834qq5LfRuXOqvgu38HqE8aV3rfq3Bp5kZcm3Ih3KVpxVPzN8J2wHv3ayMFkpEaq3IQewZLdSRPoMJAyWfnvkOE-bpCiZiSKsnp8OuHOfEuOSEmGref3spUwASuI8Py89fLzA=w720-h918-no?authuser=0');

        message.channel.send({ embeds: [embed] });

    }

}