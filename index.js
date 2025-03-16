import express from 'express';
import productRouter from './routes/products.js';
import mongoose from 'mongoose';

// make database connection
await mongoose.connect(process.env.MONGO_URL);

// create an express app
const app = express();

// Use global middleware
app.use(express.json());

// Use routes
app.use(productRouter);


//listen for incoming request
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})