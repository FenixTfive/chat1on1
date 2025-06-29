import React, { useState } from "react";
import { ChatInputProps } from "./chat.interface";

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const clearInput = () => {
    setMessage("");
  };

  const isInputEmpty = (): boolean => {
    return message.trim() === "";
  };

  const send = () => {
    if (!isInputEmpty()) {
      sendMessage(message);
      clearInput();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isInputEmpty()) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(message);
        clearInput();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col sm:flex-row items-center mb-2 space-y-3 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full sm:flex-1 text-sm focus:shadow-primary-outline leading-5.6 ease block appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#5e72e4] focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
        />
        <button
          type="button"
          onClick={send}
          disabled={isInputEmpty()}
          className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-3 rounded-full inline-flex items-center justify-center"
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
