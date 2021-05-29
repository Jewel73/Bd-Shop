const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./Model/UserModel')
const Product = require('./Model/ProductModel')
const Order = require('./Model/OrderModel')
const connectDB = require('./config/db')
const { insertMany } = require('./Model/ProductModel')


dotenv.config()
connectDB()

const importData = async ()=>{
        try {
                await Order.deleteMany()
                await Product.deleteMany()
                await User.deleteMany()
            
                const createUser = await User.insertMany(users);
                const adminUser = createUser[0]._id
                const updatedProduct = products.map(product=>{
                        return {...product, user: adminUser}
                })

                await Product.insertMany(updatedProduct)

                // const createdUsers = await User.insertMany(users)
                // const adminUser = createdUsers[0]._id
                // const sampleProducts = products.map((product) => {
                //   return { ...product, user: adminUser }
                // })
                // await Product.insertMany(sampleProducts)



                console.log("Data Imported ".green.inverse)
                process.exit()

        } catch (error) {
                console.error(`${error}`.red.inverse)
        }
}


const destroyData = async ()=>{
        try {
                await Order.deleteMany()
                await Product.deleteMany()
                await User.deleteMany()

                console.log("Data Destoryed ".green.inverse)
                process.exit()

        } catch (error) {
                console.error(`${error}`.red.inverse)
        }
}

if (process.argv[2]=== '-d'){
        destroyData()
}else{
        importData()
}
