import express from 'express'
import { userSignUp } from '../controller/user-controller.js';
const router=express.Router();

// router.post('/signup',userSignUp);
router.post('/signup', userSignUp);

export default router;