import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DetailSignUpPage from "../pages/DetailSignUpPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import ChangeId from "../components/mypage/ChangeId";
import ChangePW from "../components/mypage/ChangePW";
import Benefit from "../components/mainpage/Benefit";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/2signup" element={<DetailSignUpPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/changeID" element={<ChangeId />} />
      <Route path="/changePW" element={<ChangePW />} />
      <Route path="/benefit" element={<Benefit />} />
    </Routes>
  );
}

export default MainRouter;
