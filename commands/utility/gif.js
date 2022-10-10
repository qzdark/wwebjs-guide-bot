module.exports = {
    name: 'gif',
    async execute(client, message) {
        const media = client.MessageMedia.fromFilePath('./media/gif.mp4');
        client.sendMessage(message.from, media, {sendVideoAsGif: "true"});
    }
};