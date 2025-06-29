import LiveChat from "../features/LiveChat/LiveChat";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-8rem)] flex flex-wrap flex-row overflow-hidden">
      <div className="w-full p-2 overflow-auto bg-green-50 rounded">
        <LiveChat />
      </div>
    </div>
  );
};

export default Home;
