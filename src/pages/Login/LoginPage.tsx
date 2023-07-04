import React from "react";
import Button from "../../components/common/Button";
import { styled } from "styled-components";
import LoginInput from "../../components/login/LoginInput";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <p>로그인</p>
        <LoginInput />
        <span>
          아직 계정이 없으신가요?
          <GoSignUp onClick={() => navigate("/signup")}>회원가입하기</GoSignUp>
        </span>
        <Button text="로그인"></Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #fffcfc;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 500px;
  height: 470px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(33, 33, 33, 0.25);
  p {
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-family: "Inter";
    font-weight: 600;
    padding-top: 30px;
    left: 115px;
  }
  span {
    font-size: 11px;
    display: flex;
    justify-content: center;
  }
  > span {
    margin-top: 20px;
  }
`;

const GoSignUp = styled.span`
  font-weight: 600;
  padding-left: 3px;
`;

export default LoginPage;
