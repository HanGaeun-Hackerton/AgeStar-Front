import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DetailSignUpPage from "../pages/DetailSignUpPage";
import MainPage from "../pages/MainPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/2signup" element={<DetailSignUpPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default MainRouter;
