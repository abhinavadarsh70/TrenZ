const express = require('express')

//rest object
const app=express()

//rest api
app.get('/',(res,req)=>
{
    res.setEncoding({
        message:'Welcome to my Project'
    })
})

//PORT
const PORT = 8080
//run listen
app.listen(PORT,()=>
{
    console.log(`Server Running on ${PORT}`)
})
