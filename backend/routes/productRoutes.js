import express from 'express';
import { SpecificProducts } from '../controller/specificCatagory.js';
import { Catagory } from '../controller/catagory.js';
export const productRoutes = express.Router();

productRoutes.get('/catagory', Catagory)
productRoutes.get('/:id', SpecificProducts);