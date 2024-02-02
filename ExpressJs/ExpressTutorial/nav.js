const express = require("express")
const app = express()
const port = 3000;

app.get('/' , (req,res) =>{
    res.send("home page");
})


// for about page 
app.get('/about' , (req,res) =>{
    res.send("about page");
})
// listen 
app.listen(port, ()=>{
    console.log(`port is listen on ${port}`)
})