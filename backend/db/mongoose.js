const mongoose = require("mongoose");
const { database } = require("../config");

//db connection
const dbConnection = mongoose
  .connect(database)
  .then(() => console.log("MongoDB connected!"))
  .catch((e) => console.log(e));
