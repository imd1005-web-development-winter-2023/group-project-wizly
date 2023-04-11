const mongoose = require('mongoose');

// DEFINE THE SCHEMA
const Schema = new mongoose.Schema({
    data: Object,
    link: String
});
  
// DEFINE THE MODEL AND COLLECTION NAME
const model = mongoose.model('KeyboardJSON', Schema);

// EXPORT THE MODEL
module.exports = model;