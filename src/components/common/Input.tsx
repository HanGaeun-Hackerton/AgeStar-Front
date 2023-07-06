import { ChangeEvent } from "react";
import styled, { createGlobalStyle } from "styled-components";

interface IProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlaceholderStyle = createGlobalStyle`
  input::-webkit-input-placeholder {
    font-size: 12px;
  }
`;

const Input = ({ ...props }: IProps) => {
  return (
    <>
      <PlaceholderStyle />
      <InputWrapper>
        <InputContainer {...props} />
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  position: relative;
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
