const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nord')
        .addStringOption(option =>
            option.setName('account')
                .setDescription('email:pass')
                .setRequired(true)
        )
        .setDescription('post a nord vpn account. not yuu.'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '791672019237732382'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const account = await interaction.options.getString('account');
        const channel = await interaction.guild.channels.cache.get('1045861448452165722');
        let res = `Email: ${account.split(':')[0]}\nPassword: ${account.split(':')[1]}`
		
        const embed = new EmbedBuilder().setTitle('NordVPN Account').setColor('Random').setDescription(`\`\`\`${res}\`\`\``);
        
        await interaction.editReply('<#1045861448452165722> done!');
        
        await channel.send({ content: "<@&1038467223045537844>", embeds: [embed] });
    },
};
