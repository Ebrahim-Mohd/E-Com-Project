require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(cors())
app.use('/api/products',productRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to Database")
        app.listen(process.env.PORT, ()=>{
            console.log("listening for requests on", process.env.PORT)
        })
    })
    .catch((err) => {console.log(err)})
