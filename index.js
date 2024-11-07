require('dotenv').config()
const express=require('express')
const cors =require('cors')
require('./connection/db')
const router=require('./route/route')



const schoolServer=express()


schoolServer.use(cors())
schoolServer.use(express.json())
schoolServer.use(router)
schoolServer.use('/uploads',express.static('./uploads'))

const PORT=3000 || process.env.PORT

schoolServer.listen(PORT,()=>{
    console.log("Server Running at:",PORT)
})


schoolServer.get("/",(req,res)=>{
    res.send("<h1>School Server Is Active!!!</h1>")
})