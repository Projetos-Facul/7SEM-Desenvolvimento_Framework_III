const mongoose = require('mongoose');


const Item = mongoose.Schema({
    idproduto: Number,
    qtd: Number,
    preco: Number,
  });

const Purchase = mongoose.model('Purchase', {
    idcliente: String,
    valortotal: Number,
    itens: [Item]
})

module.exports = Purchase;

