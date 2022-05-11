const mongoose = require('mongoose');

const Costumer = mongoose.model('Costumer', {
    email: String,
    senha: String
})

module.exports = Costumer;