const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://am4:MM412Proj@cluster0.olht9.mongodb.net/library?retryWrites=true&w=majority'
, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
