
//this role based authentication
const adminMiddleWare=(req,res,next)=>{
    if(req.userInfo && req.userInfo.role=='Admin'){
        next();
        return;
    }
    res.status(403).json({
        success:false,
        message:'Access Denied Admin Acess Required'
    })
}

module.exports=adminMiddleWare;