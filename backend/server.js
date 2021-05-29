const express = require('express')
const  products= require('./data/products')
const dotenv =  require('dotenv')
const ConnectDB = require('./config/db')
const colors = require('colors')
const productRouter = require('./routes/productRouters')
const { errorHandle, notFound } = require('./middleware/errorMiddleware')


dotenv.config()
const app = express()
ConnectDB()

app.use("/api/products", productRouter)
app.use(errorHandle)
app.use(notFound)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`${process.env.NODE_ENV} server start on port number ${PORT}`.yellow.underline.bold))

