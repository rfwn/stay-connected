const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('post-outline')
        .addStringOption(option =>
            option.setName('address')
                .setDescription('bro')
                .setRequired(true)
        )
        .setDescription('post an outline server. not yuu.'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '702401397114667059'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const server = await interaction.options.getString('address');
        const channel = await interaction.guild.channels.cache.get('1045450225730465872');
        let res;
        res = server.split('#')[0] + '#' + 'https://discord.gg/rCf3ZZ6zMr'
        const embed = new EmbedBuilder().setTitle('Outline').setDescription(`\`\`\`${res}\`\`\``);
        
        await interaction.editReply('sent');
        
        await channel.send({ content: "<@&1045462634482372649>", embeds: [embed] });
    },
};
