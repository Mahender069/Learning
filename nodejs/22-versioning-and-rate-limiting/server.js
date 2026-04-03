const express = require("express");
const { urlVersioning } = require("./middleware/apiVersioning");
const { rateLimiter } = require("./middleware/rateLimiting");

const app = express();

app.use(rateLimiter(100,15*60*1000))
app.use("/api/v1", urlVersioning("v1"));

app.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.listen(3000);
