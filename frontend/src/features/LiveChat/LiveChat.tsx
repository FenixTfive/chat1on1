import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ChatInput from "./ChatInput";
import { useSocket } from "../../ApiContext/SocketContext";
import MessagesList from "./MessagesList";

const LiveChat: React.FC = () => {
  const { sendMessage } = useSocket();

  return (
    <div className="w-full bg-white shadow-lg rounded-lg h-full flex flex-col">
      {/* Area for scrolling and messages */}
      <div className="flex-1 h-full min-h-0 overflow-auto p-2">
        <PerfectScrollbar className="h-1">
          <MessagesList />
        </PerfectScrollbar>
      </div>

      {/* Input fixed at the bottom */}
      <div className="px-6 py-3 border-t border-gray-200 ">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default LiveChat;
