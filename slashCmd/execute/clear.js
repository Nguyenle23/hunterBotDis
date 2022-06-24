module.exports = {
    name: 'clear',
    description: "Delete messages",
    type: 'CHAT_INPUT',
    options: [{
        name: 'number',
        description: 'Number of messages to delete',
        type: 'NUMBER',
        required: true,
    }],
    run: async(bot, interaction) => {
        const number = interaction.options.getNumber('number');

        if (number > 100) return interaction.reply('100 is the elimination amount of messages');

        if (number < 1) return interaction.reply('1 is the at least one messages');

        interaction.channel.messages.fetch({ limit: number }).then(messages => {
            interaction.channel.bulkDelete(messages, true).then(m => { m.delete({ timeout: 3000 }); }).catch(err => { console.log(err); })
        })
    }
}