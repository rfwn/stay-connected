const { REST, Routes } = require('discord.js');

module.exports = async (client) => {
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    const commands = client.commands.map(cmd => cmd.data.toJSON());
    try {
        console.log(`[SLASH] Refreshing ${commands.length} commands`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log(`[SLASH] Reloaded ${data.length} commands.`);
    } catch (error) {
        console.error(error);
    }
}