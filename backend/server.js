const express = require('express')
const  products= require('./data/products')
const dotenv =  require('dotenv')
const ConnectDB = require('./config/db')
const colors = require('colors')


dotenv.config()
const app = express()
ConnectDB()

app.get("/", (req, res)=>{
        res.send("Server Up..................")
})

app.get('/api/products', (req, res)=>{
        res.json(products)
})

app.get('/api/products/:id', (req, res)=>{
        const product = products.find(product => product._id === req.params.id)
        res.json(product)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`${process.env.NODE_ENV} server start on port number ${PORT}`.yellow.underline.bold))

