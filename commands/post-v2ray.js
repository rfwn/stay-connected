const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('post-v2ray')
        .addStringOption(option =>
            option.setName('address')
                .setDescription('bro')
                .setRequired(true)
        )
        .setDescription('post a v2ray server. not yuu.'),
    async execute(interaction) {
        console.log("A");
        await interaction.deferReply();
        console.log("B");
        if (!['754915745774829618', '236339605199257601', '702401397114667059'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        console.log("C");
        const server = await interaction.options.getString('address');
        const channel = await interaction.guild.channels.cache.get('1038081524542750730');
        let res;
        console.log("D");
        if (server.split('://')[0] == "vmess") {
            console.log("D1");
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
            console.log("D2");
            data.ps = "https://discord.gg/rCf3ZZ6zMr"
            console.log("D3");
            res = encode(JSON.stringify(data))
        } else {
            console.log("D2");
            res = server.split('#')[0] + '#' + 'https://discord.gg/rCf3ZZ6zMr'
        }

        const embed = new EmbedBuilder().setTitle(server.split('://')[0]).setDescription(`\`\`\`${server.split('://')[0]}://${res}\`\`\``);
            console.log("E");
        
        await interaction.editReply('sent');
            console.log("F");
        
        await channel.send({ content: "bruh", embeds: [embed] });
    },
};
