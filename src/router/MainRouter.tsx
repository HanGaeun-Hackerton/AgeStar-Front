import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/Signup/SignUpPage";
import DetailSignUpPage from "../pages/Signup/DetailSignUpPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/2signup" element={<DetailSignUpPage />} />
    </Routes>
  );
}

export default MainRouter;
