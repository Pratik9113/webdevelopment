// brain 
const express = require('express')
const mongoose = require('mongoose')
// we have to import the model 
const Product = require('./models/Product.model')
const {productRoute} = require("./routes/product.route")
const app = express()

app.use(express.json())  // middleware 
app.use(express.urlencoded({ extended: true }));

// routes 
app.use("/api/products", productRoute);




app.get('/', function (req, res) {
    res.send('Hello from nowdknkcnkd  World')
})


mongoose.connect('mongodb+srv://pratikpatil9113:9xwvQxM90I6EUQPR@linking.qmyopqs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=linking"')
.then(() => {
    console.log('Connected!')
    app.listen(3000,()=>{
        console.log(`server is running`)
    })
})
.catch(() => {
    console.log('not connected')
});
