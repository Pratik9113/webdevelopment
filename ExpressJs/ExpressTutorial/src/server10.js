const express = require("express")
const app = express()
const path = require("path")
const port = 2000
// for including the path 
staticPath = path.join(__dirname , '../public')

app.use(express.static(staticPath))
// get 
app.get('/' , ()=>{
    res.send("home page buddy")
})
app.listen(port , ()=>{
    console.log(`port is listening to ${port}`)
})