const express = require("express");
const app = express();
const config = require("./config");
const apiRouter = require("./routes/api");

//Routes
app.use("/", apiRouter);

//Server
app.listen(config.port, function () {
  console.log("server słucha!");
});
