const router = require('express').Router();
const Product = require('../models/Product');


router.post('/', async (req, res)=>{

    const {codigo, nome, imagem, descricao,
         promocao, idcategoria, preco} = req.body

    const product = {codigo, nome, imagem, descricao,
        promocao, idcategoria, preco}

    try {
        await Product.create(product)
        res.status(201).json({message: 
            "Produto criado com suceso!"})
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req, res) => {
    try {
        const list = await Product.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/sale', async (req, res) => {
    try {
        const list = await Product.find({promocao: true});
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/categories/:idcategoria', async (req, res) => {
    try {
        const {idcategoria} = req.params;
        const list = await Product.find({idcategoria: idcategoria});
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error})
    }

})


router.get('/:codigo', async (req, res) => {
    try {
        const {codigo} = req.params
        const product = 
            await Product.findOne({codigo: +codigo})

        if (product)
            res.status(200).json(product)
        else
            res.status(404).json({message: "Não encontrado"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/:codigo', async (req, res) => {
    try {
        const {codigo} = req.params

        const ret = await Product.deleteOne({codigo: +codigo})
        
        if (ret.deletedCount>0)
            res.status(200).json({message:
                'Produto removido com sucesso!'})
        else
            res.status(404).json({message:
                "Não encontrado"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/', async (req, res) => {
   const {codigo, nome, imagem, descricao,
        promocao, idcategoria, preco} = req.body

   const product = {codigo, nome, imagem, descricao,
       promocao, idcategoria, preco}

   try {
       const ret = await Product.updateOne(
                {codigo: +codigo}, product)
       if (ret.matchedCount>0)
          res.status(200).json({message: 
            "Produto alterado com sucesso!", alterado: ret.modifiedCount>0})
        else
           res.status(404).json({message:
            "Não encontrado"})
   } catch (error) {
       res.status(500).json({error: error})
   }
})

module.exports = router