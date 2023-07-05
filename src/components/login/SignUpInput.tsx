import React from "react";
import Input from "../common/Input";
import { styled } from "styled-components";
import { SignupInputAtom } from "../../utils/auth/authAtom";
import { useRecoilState } from "recoil";
import { SignUpInputDataType, SignupInputType } from "../../model/Signup";
import { DetailSignUpInputData, SignUpInputData } from "../constants";

const SignUpInput = ({ page }: { page: number }) => {
  const [input, setInput] = useRecoilState<SignupInputType>(SignupInputAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const inputData = page === 1 ? SignUpInputData : DetailSignUpInputData;

  return (
    <InputContainer>
      {inputData.map((item: SignUpInputDataType, index: number) => (
        <div key={index}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
            type={item.title === "비밀번호" ? "password" : "text"}
          />
        </div>
      ))}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 220px;
  flex-direction: column;
  > div {
    width: 62%;
    position: relative;
  }
`;

const Title = styled.label`
  color: var(--gray-scale-gray-700, #5c5961);
  font-size: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export default SignUpInput;
