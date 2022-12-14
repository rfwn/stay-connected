const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('kose nane khameneii'),
    async execute(interaction) {
        const m = await interaction.channel.send('عااااح');
        const messageTimestamp = m.createdTimestamp;
        m.delete();
        const embed = new EmbedBuilder()
            .addFields(
                { name: '🏓 پینگ', value: `> \`${messageTimestamp - interaction.createdTimestamp}ms\``, inline: true },
                { name: '⌛ پینگ دیسکورد', value: `> \`${Math.round(interaction.client.ws.ping)}ms\``, inline: true },
            )
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};