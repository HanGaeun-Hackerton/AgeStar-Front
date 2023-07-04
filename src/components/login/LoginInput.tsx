import React, { useState } from "react";
import { styled } from "styled-components";
import { LoginInpuData } from "../constants";
import { LoginInputDataType, LoginInputType } from "../../model/Login";
import Input from "../common/Input";

const LoginInput = () => {
  const [input, setInput] = useState<LoginInputType>({
    id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {LoginInpuData.map((item: LoginInputDataType, index: number) => (
        <div key={index}>
          <Title htmlFor={item.name}>{item.title}</Title>
          <Input
            id={item.name}
            name={item.name}
            onChange={(e) => onChange(e)}
            type={item.title === "아이디" ? "text" : "password"}
          />
        </div>
      ))}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
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
