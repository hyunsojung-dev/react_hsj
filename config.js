module.exports = {
    name: 'rest-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'test',
    port: process.env.PORT || 7376,
    db: {
        uri: 'mongodb+srv://sojung:sojung@cluster1-oxtuz.mongodb.net/test?retryWrites=true&w=majority'
    }
}