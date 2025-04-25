import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";
import { PrismaClient } from "./src/generated/prisma/client.js"; //pke js

const prisma = new PrismaClient();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });

// request handler nextjs (app router)
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // ini adalah server HTTP untuk Next.js
  const server = createServer(handle);

  const io = new Server(server, {
    path: "/api/chat", // tentukan path untuk WebSocket
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const onlineUsers = new Map<string, string>();

  // middleware
  io.use((socket, next) => {
    const userId = socket.handshake.auth.userId as string | undefined;
    const groupId = socket.handshake.auth.groupId as string | undefined;

    if (!userId || !groupId) return next(new Error("Invalid auth"));

    socket.data.userId = userId;
    socket.data.groupId = groupId;
    next();
  });

  io.on("connection", (socket) => {
    const { userId } = socket.data as { userId: string };
    onlineUsers.set(userId, socket.id);
    console.log(`${userId} connected`);

    // 1. Kirim
    socket.on("send_group_message", async (message) => {
      const payload = {
        ...message,
        delivered: true,
      };

      await prisma.groupChat.create({
        data: payload,
      });

      io.to(message.groupId).emit("receive_group_message", payload);
    });

    // 2. Saat user join grup
    socket.on("join_group", async ({ groupId }) => {
      socket.join(groupId);

      const history = await prisma.groupChat.findMany({
        where: {
          groupId: groupId,
        },
        orderBy: { createdAt: "asc" },
      });

      socket.emit("receive_group_batch", history);
    });

    socket.on("join_private_message", async ({ senderId, receiverId }) => {
      const roomId = [senderId, receiverId].sort().join("-");

      socket.join(roomId);

      const history = await prisma.privateChat.findMany({
        where: {
          OR: [
            { senderId: senderId, receiverId: receiverId },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
        orderBy: { createdAt: "asc" },
      });

      io.to(roomId).emit("receive_private_message_batch", history);
    });

    socket.on("send_private_message", async (message) => {
      const { senderId, receiverId } = message;
      const roomId = [senderId, receiverId].sort().join("-");

      const payload = {
        ...message,
        senderId: userId,
        delivered: true,
      };

      await prisma.privateChat.create({
        data: payload,
      });

      io.to(roomId).emit("receive_private_message", payload);
    });

    //disconnect socket
    socket.on("disconnect", () => {
      onlineUsers.delete(userId);
      console.log(`${userId} disconnected`);
    });
  });

  server.listen(port, (err?: unknown) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
