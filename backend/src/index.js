const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");

mongoose.connect("mongodb://localhost:27017/appOrderListing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();

//to use json on the request body
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("Server Started at 3001 port");
});
