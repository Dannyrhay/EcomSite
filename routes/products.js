import { Router } from "express";
import { addProduct, countProduct, deleteProduct, getProduct, updateProduct } from "../controllers/products.js";

//create product router
const productRouter = Router();

// Define routes
productRouter.post('/products', addProduct );

productRouter.get('/products', getProduct );

productRouter.get('/products/count', countProduct );

productRouter.patch('/products/:id', updateProduct );

productRouter.delete('/products/:id', deleteProduct );

//Export router
export default productRouter;