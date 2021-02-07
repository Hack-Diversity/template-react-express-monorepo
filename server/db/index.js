const mongoose = require('mongoose');
const connection_string = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/items'


mongoose
    .connect(connection_string, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
