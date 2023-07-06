import { LoginInputDataType } from "../../model/Login";
import { SignUpInputDataType } from "../../model/Signup";
import { HeaderBarMenuType } from "../../model/MainPage";
import { IDetailInformation } from "../../model/MyPage";
import { IChangeInformation } from "../../model/MyPage";
import { IChangeUserInfoType } from "../../model/ChangeInfo";
import { BenefitTypes } from "../../model/BenefitType";

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

export const ChangeIdType: IChangeUserInfoType[] = [
  {
    title: "현재 아이디",
    name: "id",
    placeholder: "변경할 아이디를 입력해 주세요",
  },
  {
    title: "새로운 아이디",
    name: "id",
    placeholder: "변경할 새로운 아이디를 입력해 주세요",
  },
];

export const ChangePwType: IChangeUserInfoType[] = [
  {
    title: "현재 비밀번호",
    name: "password",
    placeholder: "현재 비밀번호를 입력해 주세요",
  },
  {
    title: "새로운 비밀번호",
    name: "password",
    placeholder: "변경할 새로운 비밀번호를 입력해 주세요",
  },
];

export const MainPageHeaderBar: HeaderBarMenuType[] = [
  {
    name: "혜택",
  },
  {
    name: "보험",
  },
  {
    name: "추천",
  },
  {
    name: "뉴스",
  },
  {
    name: "Q&A",
  },
  {
    name: "자격증",
  },
  {
    name: "기타",
  },
];

export const MyPageInformation: IDetailInformation[] = [
  {
    name: "김주원",
    id: "@kjw0319",
    birth: "2006.03.19",
  },
];

export const MyPageChangeInformation: IChangeInformation[] = [
  {
    idChange: "아이디 변경",
    pwChange: "비밀번호 변경",
    LogOut: "로그아웃",
  },
];

export const BenefitDetails: any = [
  {
    주요내용: {
      신청기간: {
        상시신청: "상시신청",
      },
      전화문의: {
        전화문의: "교육복지과(033 - 440 - 2162)",
      },
      신청방법: {
        방문신청: "방문신청",
        기타: "화천군인재육성재단 문의 및 방문 신청",
      },
      접수기관: {
        접수기관: "화천군인재육성재단",
      },
      지원형태: {
        지원형태: "현금",
      },
    },
    지원대상: {
      지원대상:
        "학생의 부모 또는 실질적으로 부양한 보호자가 주민등록상 3년 이상 관내에 주소를 둔 실거주자",
    },
    지원내용: {
      지원내용: "10대 대학 대학생 등록금 지원",
    },
    소속시관: {
      소속시관: "강원특별자치도 화천군",
    },
  },
];

export const BenefitListItem: BenefitTypes[] = [
  {
    title: "재단법인 화천군인재육성(특별지원금)",
    title1: "국내 10대 대학생 지원금 지원",
  },
  {
    title: "청소년 드림카드 지원",
  },
  {
    title: "학교 밖 청소년 교통비 지원",
    title1:
      "금정구에 주민등록이 되어있는 만9세~만18세 학교 밖 청소년에게 교통비 지원",
  },
  {
    title: "도시철도 요금 감면(청소년)",
    title1:
      "금정구에 주민등록이 되어있는 만9세~만18세 학교 밖 청소년에게 교통비 지원",
  },
  {
    title: "경기도 위기청소년 의료비 감면",
  },
];
