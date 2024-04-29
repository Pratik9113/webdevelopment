// brain 
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/Product.model')
const app = express()

app.use(express.json)
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello from nowdknkcnkd  World')
})

app.post('/api/product' , async (req,res)=>{
    // console.log(req.body);
    // res.send(req.body);
    try{
        const product  = await Product.create(req.body)
        res.status(200).json(product) 
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://pratikpatil9113:<password>@linking.qmyopqs.mongodb.net/?retryWrites=true&w=majority&appName=linking";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


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
