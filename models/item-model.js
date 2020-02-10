const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    name: { type: String, required: true },
    timeframe: { type: [String], required: false },
    priority: { type: Number, required: false },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('item', Item);