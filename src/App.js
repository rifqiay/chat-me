import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/RegisterPage";
import ChatsPage from "./pages/chats/ChatsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
