import React from "react";
import { LayoutProps } from "./interfaces";
import { useAuth } from "../ApiContext/AuthenticationContext";

const MainLayout: React.FC<LayoutProps> = (props) => {
  const { logout } = useAuth();

  return (
    <div>
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>

      <main className="relative h-full transition-all duration-200 ease-in-out rounded-xl xl:ml-0">
        <div className="m-1">
          <p>Welcome back!</p>
          <button
            onClick={logout}
            className="btn btn-primary cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="w-full px-2 py-1 mx-auto sm:px-3 md:px-3 min-h-60">
          {props.children}
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default MainLayout;
