const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");

const router = require("./routes");

mongoose.connect("mongodb://localhost:27017/mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
const server = http.Server(app);
const io = socketIo(server);

//to use json on the request body
app.use(express.json());
app.use(router);

server.listen(3001, () => {
  console.log("Server Started at 3001 port");
});
