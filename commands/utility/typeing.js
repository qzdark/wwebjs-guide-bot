module.exports = {
    name: 'typeing',
    async execute(client, message) {
        const chat = await message.getChat();
        // simulates typing in the chat
        chat.sendStateTyping();
    }
};