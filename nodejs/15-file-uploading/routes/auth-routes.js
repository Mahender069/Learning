const express=require('express')
const router=express.Router()

const {registerController,loginController,changePassword}=require('../controllers/auth-controllers');
const authMiddleWare=require('../middleware/auth-middleware')

//register router
router.post('/register',registerController)

//login router
router.post('/login',loginController)


//change password router
router.post('/change-password',authMiddleWare,changePassword);

module.exports=router