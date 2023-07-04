import { ChangeEvent } from "react";
import styled from "styled-components"; // 변경된 임포트 구문

interface IProps {
  id: string;
  name: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: IProps) => {
  return (
    <InputWrapper>
      <InputContainer {...props} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid #2ac19d;
  width: 100%;
  outline: none;
  padding-top: 15px;
  padding-bottom: 5px;
  background-color: transparent;
`;

export default Input;
