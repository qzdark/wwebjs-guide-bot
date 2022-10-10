module.exports = {
    name: 'refresh',
    execute(client, message) {
        delete require.cache[require.resolve(`./${file}.js`)];
        require(`./${file}.js`);
    }
};