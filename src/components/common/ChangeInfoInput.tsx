import { styled } from "styled-components";

interface Props {
  placeholder: string;
  name: string;
}

const ChangeInfoInput = ({ ...props }: Props) => {
  return (
    <>
      <InputContainer {...props} />
    </>
  );
};

const InputContainer = styled.input`
  width: 310px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--gray-scale-gray-800, #3f3c42);
  background: var(--gray-scale-gray-0, #fff);
`;

export default ChangeInfoInput;
