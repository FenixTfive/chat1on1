import React from "react";
import Message from "./Message";
import { useSocket } from "../../ApiContext/SocketContext";

const MessageList: React.FC = () => {
  const { messages } = useSocket();

  return (
    <div className="space-y-3">
      {[...messages].length > 0 ? (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      ) : (
        <div className="w-full flex justify-center py-10">
          Send a message to start a conversation
        </div>
      )}
    </div>
  );
};

export default React.memo(MessageList);
