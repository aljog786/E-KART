import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import productModel from "../models/productModel.js";

router.get("/",asyncHandler(async (req, res) => {
    const products = await productModel.find({});
    res.json(products);
}));
router.get("/:id",asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);

    if (product) {
    res.json(product);
        
    } 
    res.status(404);
    throw new Error('resource not found');
}));


export default router;