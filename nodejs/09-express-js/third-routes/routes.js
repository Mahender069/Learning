const express = require("express");
const app = express();

//root route
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/products", (req, res) => {
  const data = [
    {
      id: 1,
      name: "product 1",
    },
    {
      id: 2,
      name: "product 2",
    },
    {
      id: 3,
      name: "product 3",
    },
  ];
  res.json(data);
});

// here :id is dynamic value
// this a dynamic router
app.get("/products/:id", (req, res) => {
  const requiredId = req.params.id;
  console.log(requiredId);
  const data = [
    {
      id: 1,
      name: "product 1",
    },
    {
      id: 2,
      name: "product 2",
    },
    {
      id: 3,
      name: "product 3",
    },
  ];
  res.json(data.filter(({ id }) => id == requiredId));
});
app.listen(1000, () => {
  console.log("server is listening at port 1000");
});
