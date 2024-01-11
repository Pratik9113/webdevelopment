const express = require("express")
const app = express()
let PORT = 5000;

const sendMail = require('./controllers/sendMail')

app.get("/",(req,res)=>{
    res.send("I am A server")
})


app.get("/sendemail", sendMail);
const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`i am live at port no ${PORT}`)
        })
    }catch (error) {}
}
start()