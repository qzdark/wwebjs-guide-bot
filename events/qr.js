module.exports = {
    name: "qr",
    once: true,
    execute(client, qr) {
        qrcode.generate(qr, { small: true });
    },
};