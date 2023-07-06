import Button from "../components/common/Button";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import SignUpInput from "../components/login/SignUpInput";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <p>회원가입</p>
        <SignUpInput page={1} />
        <span>
          이미 계정이 있으신가요?
          <GoSignUp onClick={() => navigate("/")}>로그인하기</GoSignUp>
        </span>
        <StyledLink to="/2signup">
          <Button onClick={() => navigate("/2singup")} text="다음" />
        </StyledLink>
        <p>1 / 2</p>
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
    padding-top: 20px;
    left: 115px;
  }
  span {
    font-size: 11px;
    display: flex;
    justify-content: center;
  }
  > span {
    margin-top: 33px;
  }
`;

const GoSignUp = styled.span`
  font-weight: 600;
  padding-left: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default LoginPage;
