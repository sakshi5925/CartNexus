import express from 'express'
import { addAddress } from '../controller/userController.js';

export const userRoutes = express.Router();

userRoutes.post('/address', addAddress);