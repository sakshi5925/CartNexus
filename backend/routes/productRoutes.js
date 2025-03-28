import express from 'express';
import { SpecificProducts } from '../controller/specificCatagory.js';
import { Catagory } from '../controller/catagory.js';
import { AddToCart, getProduct } from '../controller/productController.js';

export const productRoutes = express.Router();

productRoutes.get('/catagory', Catagory)
productRoutes.get('/specific/:id', SpecificProducts);
productRoutes.post('/add',AddToCart);
productRoutes.get('/getproduct', getProduct);
