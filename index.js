const express = require("express");
const app = express();
const config = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

// DB
require("./db/mongoose");

//Parsers
//Content-type: application/json
app.use(bodyParser.json());

//Routes
app.use("/api/", apiRouter);

//Server
app.listen(config.port, function () {
  console.log("Server listening!");
});
