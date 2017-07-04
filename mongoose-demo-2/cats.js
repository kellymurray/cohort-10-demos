const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: {type: String, default: "Toby"},
  age: {type: Number, default: 6},
  fur: {type: String, default: "black"}
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
