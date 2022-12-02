const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('post-express')
        .addStringOption(option =>
            option.setName('account')
                .setDescription('both redeem code or email:pass')
                .setRequired(true)
        )
        .setDescription('post a express vpn account. not yuu.'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '702401397114667059'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const account = await interaction.options.getString('account');
        const channel = await interaction.guild.channels.cache.get('1038072848763342929');
        let res;

        if(account.split(':')[1])
			res = `Email: ${account.split(':')[0]}\nPassword: ${account.split(':')[1]}`
		else
			res = `Activation code: ${account}`;
		
        const embed = new EmbedBuilder().setTitle('ExpressVPN Account').setColor('Random').setDescription(`\`\`\`${res}\`\`\``);
        
        await interaction.editReply('sent');
        
        await channel.send({ content: "<@&1038467113381269604>", embeds: [embed] });
    },
};
