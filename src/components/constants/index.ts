import { LoginInputDataType } from "../../model/Login";
import { SignUpInputDataType } from "../../model/Signup";

export const LoginInputData: LoginInputDataType[] = [
  {
    title: "아이디",
    name: "id",
    placeholder: "아이디를 입력해 주세요",
  },
  {
    title: "비밀번호",
    name: "password",
    placeholder: "비밀번호를 입력해 주세요",
  },
];

export const SignUpInputData: SignUpInputDataType[] = [
  {
    title: "이름",
    name: "name",
    placeholder: "이름을 입력해 주세요.",
  },
  {
    title: "아이디",
    name: "id",
    placeholder: "아이디를 입력해 주세요.",
  },
  {
    title: "비밀번호",
    name: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
];

export const DetailSignUpInputData: SignUpInputDataType[] = [
  {
    title: "출생연도",
    name: "birthyear",
    placeholder: "출생연도를 입력해 주세요.",
  },
  {
    title: "주민등록번호",
    name: "citynumber",
    placeholder: "주민등록번호를 입력해 주세요.",
  },
  {
    title: "전화번호",
    name: "phonenumber",
    placeholder: "전화번호를 입력해 주세요.",
  },
];
