import asyncHandler from "../middleware/asyncHandler.js";
import productModel from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
    const products = await productModel.find({});
    res.json(products);
}); 
const getProductById = asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);

    if (product) {
      res.json(product);
    }
    else {
        res.status(404);
        throw new Error("resource not found");
    }
    
}); 

export {getProducts , getProductById};