// SocketContext.tsx
import React, { createContext, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./AuthenticationContext";

interface User {
  id: number;
  nickName: string;
  firstName: string;
  lastName: string;
}

interface LiveMessage {
  id: number; // Optional ID for the message, can be used for unique identification
  text: string;
  user: User;
}

const SocketContext = createContext<{
  socket: Socket | null;
  sendMessage: (message: string) => void;
  messages: LiveMessage[];
} | null>(null);

interface SocketContextProviderProps {
  children: React.ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  const socketRef = useRef<Socket | null>(null);
  const { accessToken } = useAuth();
  const [messages, setMessages] = React.useState<LiveMessage[]>([]);

  useEffect(() => {
    // create a new socket connection
    const socket = io("http://localhost:3000", {
      auth: {
        token: accessToken, // pass the access token for authentication
      },
      // transports: ["websocket"], // Uncomment if you want to restrict to WebSocket transport only
    });

    socketRef.current = socket;

    // event listeners
    socket.on("connect", () => {
      console.log("Connected to WebSocket:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
    //uuse same name you used in emit() --backend
    socket.on("messageFromServer", (payload) => {
      console.log("Received message:", payload);

      setMessages((prev) => [
        ...prev,
        {
          id: payload.message.id,
          text: payload.message.text,
          user: payload.user,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [accessToken]);

  const sendMessage = (message: string) => {
    if (socketRef.current) {
      socketRef.current.emit("message", { text: message });
    } else {
      console.error("Socket is not connected");
    }
  };

  return (
    <SocketContext.Provider
      value={{ socket: socketRef.current, sendMessage, messages }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};
