import { styled } from "styled-components";
import HeaderBar from "../mainpage/HeaderBar";
import UserInfo from "../common/UserInfo";
import { ChangePwType } from "../constants";
import { IChangeUserInfoType } from "../../model/ChangeInfo";
import ChangeInfoInput from "../common/ChangeInfoInput";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function ChangePW() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBar />
      <Fuck>
        <UserInfo />
        <div style={{ marginTop: "-20px" }}>
          <Title>비밀번호 변경</Title>
          {ChangePwType.map((item: IChangeUserInfoType, index: number) => (
            <InputWrapper key={index}>
              <InputTitle htmlFor={item.name}>{item.title}</InputTitle>
              <ChangeInfoInput
                name={item.name}
                placeholder={item.placeholder}
              />
            </InputWrapper>
          ))}
        </div>
        <Button text="확인" onClick={() => navigate("/mypage")} />
      </Fuck>
    </>
  );
}

const Fuck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  display: flex;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 20px;
`;

const InputTitle = styled.label`
  color: var(--gray-scale-gray-700, #5c5961);
  font-size: 14px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export default ChangePW;
