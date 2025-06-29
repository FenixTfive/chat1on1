import React from "react";
import { useAuth } from "../../ApiContext/AuthenticationContext";
import { MessageProps } from "./chat.interface";

const Message: React.FC<MessageProps> = React.memo(({ message }) => {
  const { user } = useAuth();
  return (
    <div
      className={`${
        message.user.id === user?.id
          ? `bg-gray-200 text-right`
          : `bg-violet-200 text-left`
      } p-2 rounded`}
    >
      <p className="text-gray-900 m-0 leading-none text-wrap">{message.text}</p>
      <span className="text-xs text-gray-600">
        {new Date(Date.now()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>
    </div>
  );
});

export default Message;
