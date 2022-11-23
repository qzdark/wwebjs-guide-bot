const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const config = require('./config');

const client = new Client({
	puppeteer: {
		headless: false,
		executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', 
	},
	authStrategy: new LocalAuth(),
	qrMaxRetries: 1
});

client.prefix = config.prefix;
client.commands = new Map();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.events = new Map();

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);

	if (event.once) {
		client.once(event.name, event.execute.bind(null, client));
	} else {
		client.on(event.name, event.execute.bind(null, client));
	}
}
client.on('authenticated', async () => {
	console.log(client.info);
});
client.on('message_create', async message => {
    if(message.hasMedia) {
        const media = await message.downloadMedia();
		console.log(message, media)
    }
});


client.initialize();