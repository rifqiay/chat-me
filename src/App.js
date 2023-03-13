import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/RegisterPage";
import ChatsPage from "./pages/chats/ChatsPage";
import { socket } from "./socket";

function App() {
  // useEffect(() => {
  //   socket.on("new-message", (data) => {
  //     setListChat((current) => [...current, data]);
  //   });
  //   setSocketIo(socket);
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatsPage socket={socket} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
