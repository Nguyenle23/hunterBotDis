module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'bach', //command === ten
    description: "this is a command Embeds!",
    execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setColor('#CDAD00')
            .setTitle('Trần Lê Tường Bách')
            .setURL('https://www.facebook.com/lecay4')
            .setAuthor('Hột me xí mụi', 'https://lh3.googleusercontent.com/pw/AM-JKLVhRwYh2wOnZCmG7XXysnsdBp4J8CRkUOwnLMKasCVDrzYOr9EHp47svEVuF2ljNePt_Dh9g2Pxf-avIfFLmRMu4cuY82suU0gjlNx1wztsF27cdY8ma9CH9YO4_rc5AcQCPDpe-ICrh9wl4zIVieA6bg=s604-no?authuser=0', 'https://www.facebook.com/lecay4')
            .setDescription('Đang tìm tềnh iu')
            .setThumbnail('https://lh3.googleusercontent.com/pw/AM-JKLVhRwYh2wOnZCmG7XXysnsdBp4J8CRkUOwnLMKasCVDrzYOr9EHp47svEVuF2ljNePt_Dh9g2Pxf-avIfFLmRMu4cuY82suU0gjlNx1wztsF27cdY8ma9CH9YO4_rc5AcQCPDpe-ICrh9wl4zIVieA6bg=s604-no?authuser=0')
            // .addFields({ name: 'RMIT', value: 'Civil Engineering' }, { name: '\u200B', value: '\u200B' }, //xuong dong
            //     // { name: 'Cot 1', value: 'LOL', inline: true }, { name: 'Cot 2', value: 'CSGO', inline: true },
            // )
            // .addField('Cot 3', 'PUGB', true)
            .setImage('https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/287192380_749057502955793_946996737073906025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=l7WuWVmOh7kAX9QiEkU&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVJnbm4k9klklNKTBVL_KlJZKDgqiGnkGn7zcKFWthLYxA&oe=62DA0CBE')
            .setTimestamp()
            .setFooter('Batch', 'https://lh3.googleusercontent.com/pw/AM-JKLVhRwYh2wOnZCmG7XXysnsdBp4J8CRkUOwnLMKasCVDrzYOr9EHp47svEVuF2ljNePt_Dh9g2Pxf-avIfFLmRMu4cuY82suU0gjlNx1wztsF27cdY8ma9CH9YO4_rc5AcQCPDpe-ICrh9wl4zIVieA6bg=s604-no?authuser=0');

        message.channel.send({ embeds: [embed] });

    }

}