import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin:"https://vibetalks.netlify.app",
  },
});

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

const userSocketMap = {}; // {userId:socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if(userId) userSocketMap[userId] = socket.id;

//  io.emit() is used to send events to all the connected clients 
  io.emit("getOnlineUsers" , Object.keys(userSocketMap))
  
  // Add typing event handler here
  socket.on("typing", ({ receiverId, isTyping }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("userTyping", {
        userId: userId,
        isTyping
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers" , Object.keys(userSocketMap))
  });
});

export { io, app, server };