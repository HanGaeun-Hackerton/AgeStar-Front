import React from "react";
import styled from "styled-components";

interface LogoutModalProps {
  handleCloseModal: () => void;
  handleConfirmLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  handleCloseModal,
  handleConfirmLogout,
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>정말 로그아웃하시겠습니까?</p>
        <ButtonWrapper>
          <CancelButton onClick={handleCloseModal}>아니요</CancelButton>
          <ConfirmButton onClick={handleConfirmLogout}>예</ConfirmButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: #f00;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export default LogoutModal;
