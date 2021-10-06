
module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        if(!args[0]) return message.reply('Enter the amount of clear messages');

        if(isNaN(args[0])) return message.reply('Enter real number');

        if(args[0] > 100) return message.reply('100 is the elimination amount of messages');

        if(args[0] < 1) return message.reply('1 is the at least one messages');

        message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}