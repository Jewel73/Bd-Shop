const mongoose = require('mongoose')

const connectDB =  async ()=>{
        try {
                const con = await mongoose.connect(process.env.MONGO_URI, {
                        useUnifiedTopology: true,
                        useNewUrlParser: true,
                        useCreateIndex: true
                })

                console.log(`MongoDb Connection : ${con.connection.host}`.cyan.underline.bold)
        } catch (error) {
                console.error(`Error : ${error.message}`.red.underline.bold)
                process.exit(1)
        }
}

module.exports = connectDB