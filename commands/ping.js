const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('kose nane khameneii'),
    async execute(interaction) {
        await interaction.reply('اره دا زندم.');
    },
};