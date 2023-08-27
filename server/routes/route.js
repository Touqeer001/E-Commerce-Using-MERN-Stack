import express from 'express'
import { userSignUp,userLogin} from '../controller/user-controller.js';
const router=express.Router();

// router.post('/signup',userSignUp);
router.post('/signup', userSignUp);

//FOR LOGIN
router.post('/login',userLogin)

export default router;