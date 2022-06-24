const { readdirSync } = require('fs');

module.exports = (bot) => {
    let count = 0;
    const files = readdirSync('./events/');
    for (const f of files) {
        if (!f.endsWith('.js')) continue;
        const eventName = f.substring(0, f.indexOf('.js'));
        const event = require(`../events/${f}`);
        bot.on(
            eventName,
            (...args) => event(bot, ...args)
        );
        count++;
    }
    console.log(`Loaded ${count} events.`);
}