"use client";

import Navbar from "@/components/Nav/Navbar";
import { UserContext } from "@/context/UserContext";
import { getUserInGroup } from "@/services/groupTasks";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  senderId: string;
  username: string;
  groupId: string;
  message: string;
};

type UserList = {
  id: string;
  username: string;
};

export default function ChatPage() {
  const { groupId } = useParams() as { groupId: string };

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("context null");
  }
  const { user } = context;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [userGroups, setUserGroups] = useState<UserList[]>();
  const [actionMessage, setActionMessage] = useState("group");
  const [receiverMessage, setReceiverMessage] = useState<UserList>();

  const socketRef = useRef<Socket | null>(null);

  const onReceiveMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const onReceiveBatchMessage = (batch: Message[]) => {
    setMessages((prev) => [...prev, ...batch]);
  };

  useEffect(() => {
    if (!user?.id) return;

    socketRef.current = io({
      path: "/api/chat",
      auth: {
        userId: user?.id,
        groupId,
      },
    });

    if (actionMessage === "group") {
      socketRef.current.emit("join_group", { groupId });
      socketRef.current.on("receive_group_batch", onReceiveBatchMessage);
      socketRef.current.on("receive_group_message", onReceiveMessage);
    } else if (actionMessage === "private" && receiverMessage) {
      socketRef.current.emit("join_private_message", {
        senderId: user?.id,
        receiverId: receiverMessage?.id,
      });

      socketRef.current.on(
        "receive_private_message_batch",
        onReceiveBatchMessage
      );

      socketRef.current.on("receive_private_message", onReceiveMessage);
    }

    return () => {
      socketRef.current?.off("receive_group_message", onReceiveMessage);
      socketRef.current?.on("receive_private_message", onReceiveMessage);
      socketRef.current?.disconnect();
    };
  }, [actionMessage, receiverMessage]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    const fetchUserGroup = async () => {
      try {
        const res = await getUserInGroup(groupId);
        setUserGroups(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserGroup();
  }, []);

  const handleChat = (user: UserList) => {
    setMessages([]);
    setReceiverMessage(user);
    setActionMessage("private");
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed || !socketRef.current) return;

    if (actionMessage === "group") {
      const payload: Message = {
        senderId: user!.id,
        username: user!.username,
        groupId,
        message: trimmed,
      };

      socketRef.current.emit("send_group_message", payload);
    } else if (actionMessage === "private" && receiverMessage) {
      const payload = {
        message: trimmed,
        senderId: user!.id,
        username: user!.username,
        receiverId: receiverMessage?.id,
      };

      socketRef.current.emit("send_private_message", payload);
    }

    setInput("");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl m-auto p-5">
        <h1 className="font-semibold">Chats</h1>
        <div className="grid grid-cols-5">
          <div>
            <div
              onClick={() => setActionMessage("group")}
              className="mb-2 py-3 hover:bg-green-500 hover:text-white ps-3 w-2/3 border-2 border-slate-900 shadow-md cursor-pointer"
            >
              <h3 className="font-semibold text-md">Common Group</h3>
            </div>
            {userGroups?.map((user) => (
              <div
                onClick={() => handleChat(user)}
                key={user.id}
                className="mb-2 py-3 hover:bg-green-500 hover:text-white ps-3 w-2/3 border-2 border-slate-900 shadow-md cursor-pointer"
              >
                <h3 className="font-semibold text-md">{user.username}</h3>
              </div>
            ))}
          </div>

          <div className="col-span-4 -mt-5">
            <div
              ref={scrollRef}
              className="h-[75vh] overflow-y-scroll border-2 border-slate-400 p-4 mb-1"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`w-full flex ${
                    msg?.senderId === user?.id ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="w-fit">
                    <h4
                      className={`font-medium text-sm mb-1 text-slate-700 px-1 ${
                        msg?.senderId === user?.id ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.username}
                    </h4>
                    <p
                      className={`font-normal text-md text-white py-2 px-3 rounded-md max-w-fit ${
                        msg?.senderId === user?.id
                          ? "bg-blue-400"
                          : "bg-slate-400"
                      }`}
                    >
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="py-3 ps-4 pe-5 block w-full border-2 border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 p-3 rounded-md text-white cursor-pointer"
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
