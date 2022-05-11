const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    idcategoria: Number,
    nome: String
})

module.exports = Category;