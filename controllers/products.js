import { ProductModel } from "../models/products.js";
import { addProductValidator } from "../validators/product.js";

export const addProduct = async (req, res, next) => {
   try {
     //check if user has permission
     //Upload product image
     //Validate the product information
     const {error, value} = addProductValidator.validate(req.body); 
     if (error) {
        return res.status(422).json(error);
     }
     //save product information in database
     const result = await ProductModel.create(value)
     //return response
     res.json(result);
   } catch (error) {
        next(error);
   }
}

export const getProduct = async (req, res, next) => {
    try {
        const{ filter ="{}" }=req.query;
        //fetch product from database
        const result = await ProductModel.find(JSON.parse(filter))
        .sort(JSON.parse(sort));
        //return response
        res.json(result);
    } catch (error) {
        next(error);
    }
}

export const countProduct = (req, res) => {
    res.send('count of products');
}

export const updateProduct = (req, res) => {
    res.send(`Product with id ${req.params.id} updated`);
}

export const deleteProduct = (req, res) => {
    res.send(`Product with id ${req.params.id} deleted`);
}
