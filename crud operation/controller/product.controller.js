const Product =  require("../models/Product.model")


const getProduct =  async (req,res)=>{
    try {
        const  products =  await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message :  error.message});
    }
}
const getSingleProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createProduct = async(req,res) =>{
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: "Name is required" });
        }

        // here in 2 line you are requesting product 
        console.log('Request Body:', req.body);
        const product = await Product.create(req.body);
        res.status(200).json(product);

        // for testing 
        // console.log(req.body)
        // res.send(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updatePost = async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if(!product){
            return res.status(404).json({message : "Product not found"});
        }
        // direct can't check the update 
        // you need to some checker wheather is my update successful

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
const deletePost = async(req,res) =>{
    try {
        const {id} =  req.params;
        const product  = await Product.findByIdAndDelete(id);
        
        if(!product){
            return res.status(404).json({message : "product not found"});
        }

        res.status(200).json({message : "product delete successfully "})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
module.exports = {
    getProduct,
    getSingleProduct,
    createProduct,
    updatePost,
    deletePost
};