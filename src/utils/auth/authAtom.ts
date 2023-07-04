import { atom } from "recoil";
import { SignupInputType } from "../../model/Signup";

export const LoginInputAtom = atom({
  key: "LoginInputAtom",
  default: {
    id: "",
    password: "",
  },
});

export const SignupInputAtom = atom<SignupInputType>({
  key: "SignupInputAtom",
  default: {
    name: "",
    id: "",
    password: "",
    birthyear: "",
    citynumber: "",
    phonenumber: "",
  },
});
