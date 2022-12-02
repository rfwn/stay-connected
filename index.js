const { Client, GatewayIntentBits, Collection } = require('discord.js');
const registerEvents = require('./registry/events');
const registerCommands = require('./registry/commands');
const deployCommands = require('./registry/deploy');
require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

(async () => {
	await registerEvents(client);
	await registerCommands(client);
	await deployCommands(client);
	client.login(process.env.TOKEN);
})();