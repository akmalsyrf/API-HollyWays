require("dotenv").config();
const express = require("express");
const cors = require("cors");

//websocket server
const http = require("http");
const { Server } = require("socket.io");
const router = require("./src/routes/index");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
require("./src/socket")(io);

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/v1", router);

//not found
app.use((req, res) => {
  res.sendStatus(404);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
