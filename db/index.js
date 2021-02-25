const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://test_user:testingforhack@cluster0.xyb79.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
