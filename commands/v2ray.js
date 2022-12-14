const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('v2ray')
        .addStringOption(option =>
            option.setName('server')
                .setDescription('bro')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('country')
                .setDescription('hell naw')
                .setRequired(false)
                .addChoices(
					{ name: 'Germany', value: '🇩🇪Germany' },
                    { name: 'USA', value: '🇺🇸USA' },
                    { name: 'Netherlands', value: '🇳🇱Holland' },
                    { name: 'Finland', value: '🇫🇮Finland' },
                    { name: 'England', value: '🇬🇧England' },
                    { name: 'HongKong', value: '🇭🇰Hong Kong' },
                    { name: 'France', value: '🇫🇷France' }
                )
        )
        .setDescription('post a v2ray server. not yuu.'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '685169776359768094'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const server = await interaction.options.getString('server');
        const country = await interaction.options.getString('country');
        const channel = await interaction.guild.channels.cache.get('1038081524542750730');
        let res;
        if (server.split('://')[0] == "vmess") {
            function decode(b64) {
                const b = Buffer.from(b64, 'base64')
                const s = b.toString();
                return s;
            }
            function encode(str) {
                const b = Buffer.from(str);
                const s = b.toString('base64');
                return s;
            }
            
            const data = JSON.parse(decode(server.split("://")[1]));
            data.ps = "https://discord.gg/rCf3ZZ6zMr"
            res = `${server.split('://')[0]}://${encode(JSON.stringify(data))}`
        } else {
            res = server.split('#')[0] + '#' + 'https://discord.gg/rCf3ZZ6zMr'
        }

        const embed = new EmbedBuilder().setTitle(country).setDescription(`\`\`\`${res}\`\`\``);
        
        await interaction.editReply('<#1038081524542750730> done!');
        
        await channel.send({ content: "<@&1038466977175457852>", embeds: [embed] });
    },
};
