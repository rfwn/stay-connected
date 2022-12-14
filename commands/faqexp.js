const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faqexp')
        .setDescription('kose baba khameneii'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '685169776359768094'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const m = await interaction.editReply('عااااح');
        const embed = new EmbedBuilder().setTitle('برای رفع ارور های اکسپرس چنل زیر را چک کنید 🔰').setDescription('<#1045859341124775966>')

        const channel = await interaction.guild.channels.cache.get('1038072848763342929');

        await channel.send({embeds: [embed] });

    },
};