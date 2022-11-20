const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    once: true,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`[ERROR] No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`[ERROR] executing ${interaction.commandName}`);
            console.error(error);
        }
    },
};