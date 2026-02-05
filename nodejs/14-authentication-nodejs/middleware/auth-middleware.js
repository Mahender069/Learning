const jwt=require('jsonwebtoken')
const authMiddleWare=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1]
    if(!token){
        res.status(401).json({
            sucess:false,
            message:'Acess denied.No token provided please login again'
        })
        return;
    }

    //decode this token
    try{
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decodeToken);
        req.userInfo=decodeToken;
        next();
    }catch(error){
        res.status(500).json({
            sucess:false,
            message:'Acess denied.No token provided please login again'
        })
        return;
    }
}


module.exports=authMiddleWare;