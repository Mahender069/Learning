const adminMiddleWare=(req,res,next)=>{
    if(req.userInfo.role==='Admin'){
        next();
        return;
    }
    res.status(401).json({
        message:'Admin Access Required',
        data:req.userInfo
    })
}
module.exports=adminMiddleWare