const express = require("express")
const morgan  = require("morgan")
const cors  = require("cors")
const mongoose  = require("mongoose")
require("dotenv").config()
const connectDB = require('./config/db')
const { readdirSync } = require('fs')
const bodyParser = require('body-parser')

const app=express()


//ConectDB
connectDB()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json({limit:'20mb'}))

/*app.get("*",(req,res)=>{
    res.json({
        data:"Message Form Server"
    })
})
*/
readdirSync('./routes')
.map((r)=> app.use('/api', require('./routes/'+r)))

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`start server in port ${port}`))