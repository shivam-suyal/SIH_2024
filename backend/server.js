const express = require('express')
const app = express()

const PORT = process.env.PORT||3000

app.get("/",(req,res)=>{
    res.send("hello world")
})

const start=()=>{
    try{
        app.listen(PORT,()=>{
            
            console.log(`server is running :http://localhost:${PORT}`)
        })
    }
    catch(err){
        console.log(err)
    }
}
start()