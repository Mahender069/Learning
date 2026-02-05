const express=require('express');
const authMiddleWare = require('../middleware/auth-middleware');

const router=express.Router();

router.get('/welcome',authMiddleWare,(req,res)=>{
    res.json({
        message:"Welcome to home page",
        userInfo:req.userInfo
    })
})
module.exports=router;