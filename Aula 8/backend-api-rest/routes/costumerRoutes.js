const router = require('express').Router();
const Costumer = require('../models/Costumer');
const { verifyJWT, generateJWT } = require('./Authorization');

router.post('/', async (req, res)=>{

    const {email, senha} = req.body
    const costumer = {email, senha}

    try {
        await Costumer.create(costumer)
        res.status(201).json({message: "Cliente criado com sucesso!"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/test', verifyJWT, async (req, res) =>{
    res.status(200).json({message: 'acessou', 
        authenticatedEmail: req.authenticatedEmail,
        sucesso: true});
})

router.post('/login', async (req, res)=>{

    const {email, senha} = req.body
    try {

        const costumer = await Costumer.findOne({email: email})
        if (costumer)
            if (costumer.email===email && costumer.senha===senha)
            {
                const token = generateJWT({email: email})
                res.status(200).json({sucesso: true, token: token})
            }
            else
                res.status(401).json({sucesso: false, message: 'Não autorizado. ERR: 01'})
        else
            res.status(401).json({sucesso: false, message: 'Não autorizado. ERR: 02'})

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }

})


module.exports = router;