const { readdirSync } = require('fs');

module.exports = (bot) => {
    let count = 0;
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                count++;
                bot.commands.set(pull.name, pull);
            } else {
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => {
                    bot.aliases.set(alias, pull.name);
                });
            }
        }
    });
    console.log(`Loaded ${count} commands.`);
}