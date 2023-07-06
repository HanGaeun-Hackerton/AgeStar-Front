import { useState } from "react";
import { CountryLogo, DetailForward } from "../../assets/mainpage/index";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

function Benefit() {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  const handleDetailsToggle = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <HeaderBar />
      <Title>혜택</Title>
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            <BenefitText>재단법인 화천군인재육성(특별지원금)</BenefitText>
            <BenefitDetailText>국내 10대 대학생 지원금 지원</BenefitDetailText>
          </BenefitTexts>
        </LeftSide>
        <DetailToggleButton onClick={handleDetailsToggle}>
          <img src={DetailForward} alt="" />
        </DetailToggleButton>
        {detailsVisible && (
          <Details>
            <DetailInformation></DetailInformation>
          </Details>
        )}
      </BenefitWrapper>
      <br />
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            <BenefitText>청소년 드림카드 지원</BenefitText>
            <BenefitDetailText></BenefitDetailText>
          </BenefitTexts>
        </LeftSide>
        <DetailToggleButton onClick={handleDetailsToggle}>
          <img src={DetailForward} alt="" />
        </DetailToggleButton>
        {detailsVisible && (
          <Details>
            <DetailInformation></DetailInformation>
          </Details>
        )}
      </BenefitWrapper>
      <br />
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            <BenefitText>학교 밖 청소년 교통비 지원</BenefitText>
            <BenefitDetailText>
              금정구에 주민등록이 되어있는 만9세~만18세 학교 밖 청소년에게
              교통비 지원
            </BenefitDetailText>
          </BenefitTexts>
        </LeftSide>
        <DetailToggleButton onClick={handleDetailsToggle}>
          <img src={DetailForward} alt="" />
        </DetailToggleButton>
        {detailsVisible && (
          <Details>
            <DetailInformation></DetailInformation>
          </Details>
        )}
      </BenefitWrapper>
      <br />
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            <BenefitText>도시철도 요금 감면(청소년)</BenefitText>
            <BenefitDetailText>
              금정구에 주민등록이 되어있는 만9세~만18세 학교 밖 청소년에게
              교통비 지원
            </BenefitDetailText>
          </BenefitTexts>
        </LeftSide>
        <DetailToggleButton onClick={handleDetailsToggle}>
          <img src={DetailForward} alt="" />
        </DetailToggleButton>
        {detailsVisible && (
          <Details>
            <DetailInformation></DetailInformation>
          </Details>
        )}
      </BenefitWrapper>
      <br />
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            <BenefitText>경기도 위기청소년 의료비 감면</BenefitText>
            <BenefitDetailText></BenefitDetailText>
          </BenefitTexts>
        </LeftSide>
        <DetailToggleButton onClick={handleDetailsToggle}>
          <img src={DetailForward} alt="" />
        </DetailToggleButton>
        {detailsVisible && (
          <Details>
            <DetailInformation></DetailInformation>
          </Details>
        )}
      </BenefitWrapper>
      <br />
    </div>
  );
}

const Title = styled.p`
  color: #424242;
  font-size: 32px;
  font-family: Noto Sans KR;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const BenefitTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;
const BenefitDetailText = styled.div`
  text-align: center;
  font-size: 13px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const DetailInformation = styled.div`
  width: 520px;
  height: 665px;
  border-radius: 15px;
  border: 1px solid #efefef;
  background: #f6f6f5;
  box-shadow: 0px 3px 10px 0px rgba(42, 193, 157, 0.3);
`;

const BenefitWrapper = styled.div`
  position: relative;
  width: 520px;
  height: 73px;
  border-radius: 15px;
  border: 1px solid #efefef;
  background: #f6f6f5;
  box-shadow: 0px 3px 10px 0px rgba(42, 193, 157, 0.3);
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LOGOImg = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 12px;
`;

const BenefitText = styled.p`
  margin-left: 12px;
  font-weight: bold;
`;

const DetailToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 12px;
  cursor: pointer;
`;

const Details = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Details1 = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Details2 = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Details3 = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export default Benefit;
