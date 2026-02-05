const express=require('express')
const authMiddleWare=require('../middleware/auth-middleware')

const router=express.Router()

router.get('/welcome',authMiddleWare,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to Home page Bro!!',
        userInfo:req.userInfo
    })
})

module.exports=router;