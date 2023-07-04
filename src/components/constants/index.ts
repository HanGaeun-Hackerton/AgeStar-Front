import { LoginInputDataType } from "../../model/Login";
import { SignUpInputDataType } from "../../model/Signup";

export const LoginInputData: LoginInputDataType[] = [
  {
    title: "아이디",
    name: "id",
  },
  {
    title: "비밀번호",
    name: "password",
  },
];

export const SignUpInputData: SignUpInputDataType[] = [
  {
    title: "이름",
    name: "name",
  },
  {
    title: "아이디",
    name: "id",
  },
  {
    title: "비밀번호",
    name: "password",
  },
];

export const DetailSignUpInputData: SignUpInputDataType[] = [
  {
    title: "출생연도",
    name: "birthyear",
  },
  {
    title: "주민등록번호",
    name: "citynumber",
  },
  {
    title: "전화번호",
    name: "phonenumber",
  },
];
