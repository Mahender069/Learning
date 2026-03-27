

const logger=(req,res,next)=>{
    console.log(`${req.url} ${req['User-Agent']} ${new Date().toISOString()}`)
    next();
}
module.exports={logger}