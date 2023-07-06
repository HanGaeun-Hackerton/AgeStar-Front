import { useState } from "react";
import styled from "styled-components";
import HeaderBar from "../components/mainpage/HeaderBar";
import { MyPageChangeInformation } from "../components/constants";
import { IChangeInformation } from "../model/MyPage";
import UserInfo from "../components/common/UserInfo";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../components/mypage/LogoutModal";

const MyPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogOut = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    navigate("/");
    setShowModal(false);
  };

  return (
    <>
      <HeaderBar />
      <UserInfo />
      <ContentWrapper>
        {MyPageChangeInformation.map(
          (item: IChangeInformation, index: number) => (
            <div key={index}>
              <ChangeWrapper onClick={() => navigate("/changeID")}>
                <p>{item.idChange}</p>
              </ChangeWrapper>
              <ChangeWrapper onClick={() => navigate("/ChangePW")}>
                <p>{item.pwChange}</p>
              </ChangeWrapper>
              <ChangeWrapper onClick={handleLogOut}>
                <p style={{ color: "red", fontWeight: 700 }}>{item.LogOut}</p>
              </ChangeWrapper>
            </div>
          )
        )}
      </ContentWrapper>
      {showModal && (
        <LogoutModal
          handleCloseModal={handleCloseModal}
          handleConfirmLogout={handleConfirmLogout}
        />
      )}
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const ChangeWrapper = styled.div`
  width: 397px;
  height: 61px;
  border-radius: 12px;
  border: 2px solid #bdb8b8;
  background: rgba(217, 217, 217, 0);
  margin-top: 12px;
  p {
    width: 120px;
    font-size: 20px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 17px 289px 20px 11px;
  }
`;

export default MyPage;
