const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) =>{
    res.end('hello world');
})

app.get('/about', (req,res)=>{
    res.end('this is about page');
})

app.listen(port, ()=>{
    console.log(`example app listening on ${port}`)
})