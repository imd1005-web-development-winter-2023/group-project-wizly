const mongoose = require("mongoose")

const keySchema = new mongoose.Schema({
    keyData: Object,
    link: String
})

module.exports = mongoose.model('Data', keySchema);