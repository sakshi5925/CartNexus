import express from 'express'
import { LoginUser, RegestierUser } from '../controller/authController.js';

export const authRoutes = express.Router();

authRoutes.post('/signup', RegestierUser);
authRoutes.post('/login', LoginUser);