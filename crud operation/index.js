// brain 
const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log(`server is running`)
})

app.get('/', function (req, res) {
    res.send('Hello from nowdknkcnkd  World')
})
