const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors');


const productsRoutes = require('./routes/productsRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes');
const costumersRoutes = require('./routes/costumerRoutes');
const purchasesRoutes = require('./routes/purchasesRoutes')

app.use(cors())

app.use(
    express.urlencoded({ extended: true }),
    express.json()
)


app.use('/products', productsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/costumers', costumersRoutes)
app.use('/purchases', purchasesRoutes)

app.get('/', (req, res) => {
    res.status(418).json({
        message: "Desculpe, não sou um bule!"})
})



mongoose.connect('mongodb+srv://tofanini:cesar12345@cluster0.ytgt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado ao MongoDB")
})
.catch((e)=>{
    console.log("Erro ao acessar o MongoDB")
    console.log(e)
})

app.listen(3100);