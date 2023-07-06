import HeaderBar from "../components/mainpage/HeaderBar";
import { styled } from "styled-components";
import {
  BenefitIcon,
  Bohum,
  Card,
  News,
  QandA,
  Gituar,
  Recommend,
} from "../assets/mainpage";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderBar />
      <GridWrapper>
        <GridLayout onClick={() => navigate("/benefit")}>
          <GridText>혜택</GridText>
          <DetailGridText>세상은 넓고 혜택은 많다</DetailGridText>
          <BenefitIcons src={BenefitIcon} alt="" />
        </GridLayout>
        <GridLayout>
          <GridText>보험</GridText>
          <DetailGridText>보험을 한 번에 빠르게</DetailGridText>
          <BenefitIcons src={Bohum} alt="" />
        </GridLayout>
        <GridLayout>
          <GridText>자격증</GridText>
          <DetailGridText>
            나를 위한 자격증을
            <br />
            바로 알아보세요
          </DetailGridText>
          <BenefitIcons src={Card} alt="" />
        </GridLayout>
        <GridLayout>
          <GridText>뉴스</GridText>
          <DetailGridText>세상을 사회를 바로 알기</DetailGridText>
          <BenefitIcons src={News} alt="" />
        </GridLayout>
        <GridLayout>
          <GridText>QnA</GridText>
          <DetailGridText>질문으로 바로 알아보기</DetailGridText>
          <BenefitIcons src={QandA} alt="" />
        </GridLayout>
        <GridLayout>
          <GridText>기타</GridText>
          <DetailGridText>이 외에 더 알아보기</DetailGridText>
          <BenefitIcons src={Gituar} alt="" />
        </GridLayout>
        <ExtraGridLayout>
          <GridText>추천</GridText>
          <DetailGridText>당신을 위한 맞춤 리스트</DetailGridText>
          <BenefitIcons
            style={{ position: "relative", left: "10px" }}
            src={Recommend}
            alt=""
          />
        </ExtraGridLayout>
      </GridWrapper>
    </div>
  );
};

const GridLayout = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 15px;
  border: 1px solid #efefef;
  background: #f6f6f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  p {
  }
`;

const ExtraGridLayout = styled(GridLayout)`
  grid-column: 1 / 4; // 첫 번째 열부터 세 번째 열까지 확장
  grid-row: 3; // 세 번째 행을 사용
  width: 100%;
  position: relative;
`;

const GridText = styled.p`
  font-size: 20px;
  padding-left: 21px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const DetailGridText = styled.p`
  color: var(--sub, #747474);
  font-size: 12px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
  padding-left: 21px;
`;

const GridWrapper = styled.div`
  display: grid;
  column-gap: 125px;
  row-gap: 90px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 700px;
  height: 500px;
  place-items: center;
  margin-top: 77px;
  margin-left: 310px;
`;

const BenefitIcons = styled.img`
  width: 85px;
  height: 78px;
  position: relative;
  left: 95px;
`;

export default MainPage;
