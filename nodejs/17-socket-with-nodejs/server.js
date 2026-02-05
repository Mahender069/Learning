const express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const users = [];
const rooms = [];

io.on("connection", (socket) => {
  socket.on("aUserisConnected", (info) => {
    const username=info.username;
    const room=info.room;
    console.log("Connected User", info.username);
    socket.username = username;
    socket.room = room;

    socket.join(room);
    console.log(username);
    users.push(username);
    io.emit("printOnlineUsers", users);


  });

  socket.on("messageReceived", (data) => {
    io.to(socket.room).emit("displayMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected User", socket.username);
    const index = users.findIndex((value) => value == socket.username);
    users.splice(index, 1);
    io.emit("printOnlineUsers", users);


    socket.leave(socket.room)
  });
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});
