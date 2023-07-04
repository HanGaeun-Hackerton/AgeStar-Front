import styled from "styled-components";

const Button = ({ text, onClick }: { text: string; onClick?: void }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: #2ac19d;
  border: none;
  border-radius: 12px;
  width: 310px;
  height: 50px;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin: 37px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  &:hover {
    background-color: #23a384;
  }
  cursor: pointer;
`;

export default Button;
