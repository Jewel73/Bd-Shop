

const errorHandle = (err, req, res, next)=>{
        const statusCode = res.statusCode === 200 ? 500 : res.statusCode
        res.status(statusCode)
        res.json({
                
                stack: process.env.NODE_ENV === 'producton' ? "" : err.stack,
                message: res.message,
                status: res.statusCode
        })
}

const notFound = (req, res, next)=>{
        const error = new Error(`Not Found ${req.originalUrl}`)
        res.status(404)
        next(error)
}

module.exports = {errorHandle, notFound}