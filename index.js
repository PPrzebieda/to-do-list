const express = require("express");
const app = express();
const config = require("./config");
const apiRouter = require("./routes/api");

// DB
require("./db/mongoose");

//Routes
app.get("/", apiRouter);

//Server
app.listen(config.port, function () {
  console.log("Server listening!");
});
