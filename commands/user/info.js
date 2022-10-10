module.exports = {
    name: 'info',
    execute(client, message) {
        let info = client.info;
        message.reply(
            `*Connection info*\n`+
            `User name: ${info.pushname}\n`+
            `My number: ${info.wid.user}\n`+
            `Platform: ${info.platform}`
        );
    }
};