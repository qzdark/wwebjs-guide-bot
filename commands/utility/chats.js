module.exports = {
    name: 'chats',
    async execute(client, message) {
        const chats = await client.getChats();
        client.sendMessage(message.from, `You have ${chats.length} chats open.`);
    }
};