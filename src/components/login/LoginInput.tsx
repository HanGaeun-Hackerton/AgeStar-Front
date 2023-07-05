import React from "react";
import { styled } from "styled-components";
import { LoginInputData } from "../constants";
import { LoginInputDataType, LoginInputType } from "../../model/Login";
import Input from "../common/Input";
import { LoginInputAtom } from "../../utils/auth/authAtom";
import { useRecoilState } from "recoil";

const LoginInput = () => {
  const [input, setInput] = useRecoilState<LoginInputType>(LoginInputAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {LoginInputData.map((item: LoginInputDataType, index: number) => (
        <div key={index}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            name={item.name}
            onChange={(e) => onChange(e)}
            type={item.title === "비밀번호" ? "password" : "text"}
            placeholder={item.placeholder}
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
  height: 160px;
  flex-direction: column;
  margin-top: 36px;
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

export default LoginInput;
