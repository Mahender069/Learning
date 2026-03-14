const requestLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  const url = req.url;
  const method = req.method;
  const userAgent = req.get("User-Agent");

  console.log(`[${timeStamp} ${url} ${method} ${userAgent}]`);
  next();
};
const addTimeStamp = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  next();
};

module.exports = { requestLogger, addTimeStamp };
