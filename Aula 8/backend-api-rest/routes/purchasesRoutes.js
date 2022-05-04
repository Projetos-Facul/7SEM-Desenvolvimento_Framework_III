const router = require('express').Router();
const Costumer = require('../models/Costumer');
const Purchase = require('../models/Purchase');
const { verifyJWT, generateJWT } = require('./Authorization');

router.post('/', verifyJWT, async (req, res)=>{
    const {valortotal, itens} = req.body
    const{authenticatedEmail} = req

    const cliente = await Costumer.findOne({email: authenticatedEmail}, {email: true})
    if (!cliente)
        return res.status(401).json({message: "Cliente não identificado!"})

    const {id: idcliente} = await Costumer.findOne({email: authenticatedEmail})
    
    const purchase = {idcliente, valortotal, itens}
    
    console.log(purchase)

    try {
        await Purchase.create(purchase)
        res.status(201).json({message: "Compra criada com sucesso!"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/costumers/:idcliente', verifyJWT, async (req, res)=>{

    const {idcliente} = req.params;

    try {
        const list = await Purchase.find({idcliente: idcliente})
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error})
    }
})


module.exports = router;