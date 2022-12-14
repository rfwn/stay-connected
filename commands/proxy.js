const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('proxy')
        .addStringOption(option =>
            option.setName('proxies')
                .setDescription('seperate em with ::')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('operator')
                .setDescription('کیر میخوام')
                .setRequired(true)
                .addChoices(
					{ name: 'MCI.', value: '❗Hamrah Aval. ONLY❗' },
					{ name: 'Irancell', value: '❗Irancell ONLY❗' },
					{ name: 'Wi-Fi', value: '❗Wi-Fi ONLY❗' },
					{ name: 'All', value: 'All Operators👍' }
				)
        )
        .setDescription('post some proxies. not yuu.'),
    async execute(interaction) {
        await interaction.deferReply();
        if (!['754915745774829618', '236339605199257601', '900780499058982983'].includes(interaction.member.id)){
            return interaction.reply("نه");
        }    
        const numerals = ['پروکسی 1','پروکسی 2','پروکسی 3','پروکسی 4','پروکسی 5','پروکسی 6','پروکسی 7','پروکسی 8']
        const proxies = await interaction.options.getString('proxies');
        const operator = await interaction.options.getString('operator');
        const channel = await interaction.guild.channels.cache.get('1043062591502696468');
        let res = '';

        prx = proxies.split('::');

        let i = 0;
		prx.forEach(proxy => {
			res  = res + `[${numerals[i]}](${proxy})\n\n`;
			i++;
		});
		
        const embed = new EmbedBuilder().setTitle('Telegram Proxies').setColor('#00b2e3').setDescription(res).setFooter({text: operator});

        
        await interaction.editReply('<#1043062591502696468> done!');
        
        await channel.send({ content: "<@&1043062981564571688>", embeds: [embed] });
    },
};
