class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}
const asyncHandler=(fn)=>{
  return (req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
  }
}

module.exports={ApiError,asyncHandler};