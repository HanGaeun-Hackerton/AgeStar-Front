import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/Signup/SignUpPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default MainRouter;
