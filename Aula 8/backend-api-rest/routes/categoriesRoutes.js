const router = require('express').Router();
const Category = require('../models/Category');



router.post('/', async (req, res)=>{

    const {idcategoria, nome} = req.body
    const category = {idcategoria, nome}

    try {
        await Category.create(category)
        res.status(201).json({message: 
            "Categoria criado com suceso!"})
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

router.get('/:idcategoria', async (req, res) => {
    try {
        const {idcategoria} = req.params;
        const category = await Category.findOne({idcategoria: +idcategoria})
        if (category)
            res.status(200).json(category);
        else
            res.status(404).json({message: 'Categoria não encontrada.'})

    } catch (error) {
        res.status(500).json({error: error});
    }
});

module.exports = router;
