const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Product");

app.use(
    express.urlencoded(
        { 
            extended: true
        }),
    express.json()
);

app.get('/', (req, res) => {
    res.status(418).json({
            message:"Desulpe não sou um bule"
    });
});

app.post('/products', async (req, res) => {
    const {codigo, nome, imagem, descricao, promocao, idcategoria, preco} = req.body;
    const product = {codigo, nome, imagem, descricao, promocao, idcategoria, preco};

    try {
        await Product.create(product);
        res.status(201).json({
            message:"Produto criado com sucesso!"
        });
    } catch (error) {
        res.status(500).json({error: error});
    }
});

app.get('/products', async (req, res) => {
    try {
        const list = await Product.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

app.get('/products/sale', async (req, res) => {
    try {
        const list = await Product.find({promocao: true});
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

app.get('/products/:codigo', async (req, res) => {
    try {
        const {codigo} = req.params;
        const product = await Product.findOne({codigo: +codigo});
        if (product)
            res.status(200).json(product);
        else
            res.status(404).json({
                message: "Não encontrado"
            });
    } catch (error) {
        res.status(500).json({error: error});
    }
});

app.delete('/products/:codigo', async (req, res) => {
    try {
        const {codigo} = req.params;
        const product = await Product.deleteOne({codigo: +codigo});

        if (req.deleteCount>0)
            res.status(200).json({
                message: "Produto removido com sucesso"
            });
        else
            res.status(404).json({
                message: "Não encontrado"
            });
    } catch (error) {
        res.status(500).json({error: error});
    }
});

app.patch('/products', async (req, res) => {
    const {codigo, nome, imagem, descricao, promocao, idcategoria, preco} = req.body;
    const product = {codigo, nome, imagem, descricao, promocao, idcategoria, preco};

    try {
        const ret = await Product.updateOne({codigo: codigo}, product);
        res.status(200).json({
            message:"Produto alterado com sucesso!"
        });
        console.log(req);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

mongoose.connect('mongodb+srv://vguedes:8Qi02vkMQ2YZxRYm@mycluster.mcdcg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
            .then(() => {
                console.log("Conectado ao mongoDB");
            })
            .catch((e) => {
                console.log("Não conectado ao mongoDB");
                console.log(e);
            });

app.listen(3100);