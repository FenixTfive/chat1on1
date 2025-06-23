import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/routes";
import AuthenticationContextProvider from "./ApiContext/AuthenticationContext";

function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <RouterProvider router={router} />
      </AuthenticationContextProvider>
    </>
  );
}

export default App;
