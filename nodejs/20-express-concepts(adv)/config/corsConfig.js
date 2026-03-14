const cors = require("cors");

const configCors = () => {
  return cors({
    //origin -> this will tell that which origins you want user can access your api
    origin: (origin, callback) => {
      const options = ["http://localhost:8080"];
      if (!origin || options.findIndex(origin) !== -1) {
        callback(null, true); // null means no error and true means origin is allowed
      } else {
        callback(new Error("not allowed by cors"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    credentials:true,
    maxAge:600,
    preflightContinue:true --> notes in notes.txt
  });
};


module.exports={configCors}
