module.exports = {
    name: "message_create",
    async execute(client, message) {

        if (!message.body.startsWith(client.prefix) || !message.id.fromMe) return;

        const args = message.body.slice(client.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
    
        const command = client.commands.get(commandName);
        if (!command) return;
    
        try {
            command.execute(client, message);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    },
};