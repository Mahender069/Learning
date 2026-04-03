const limiter = require("express-rate-limit");

const rateLimiter = (maxRequests, time) => {
  return limiter.rateLimit({
    windowMs: time,
    max: maxRequests,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
  });
};

module.exports = { rateLimiter };
