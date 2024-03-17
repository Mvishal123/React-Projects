import React from "react";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import SessionButton from "./components/SessionButton.jsx";
import { UserContextProvider } from "./components/providers/userContext.jsx";
const App = () => {
  return (
    <UserContextProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Login />
          <div style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
            <SessionButton />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
};

export default App;
