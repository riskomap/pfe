const mongoose = require('mongoose')

const khraSchema = mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})
const ModelClass = mongoose.model('khra', khraSchema);


module.exports = ModelClass