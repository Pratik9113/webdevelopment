const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model")
const {getProduct, getSingleProduct, createProduct,updatePost,deletePost } = require('../controller/product.controller')

router.get('/',getProduct)

router.get('/:id',getSingleProduct)

router.post("/", createProduct)

router.put("/:id", updatePost)

router.delete("/:id", deletePost)



module.exports = router;