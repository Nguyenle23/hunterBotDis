const { readdirSync } = require('fs');
const slashCommands = [];
// const guildID = '736977233566236772' || '902128100748427284';

module.exports = (client) => {
    let count = 0;
    readdirSync('./slashCmd/').forEach(dir => {
        const commands = readdirSync(`./slashCmd/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../slashCmd/${dir}/${file}`);
            if (pull.name) {
                client.interactions.set(pull.name, pull);
                slashCommands.push(pull);
                count++;
            } else {
                continue;
            }
        }
    });

    client.once('ready', async() => {
        // await client.guilds.cache.get(guildID).commands.set(slashCommands);
        await client.application.commands.set(slashCommands);
    });

    console.log(`${count} slash commands loaded.`);
}