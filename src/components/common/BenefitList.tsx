import { useState } from "react";
import { CountryLogo, DetailForward } from "../../assets/mainpage/index";
import styled from "styled-components";
import { BenefitTypes } from "../../model/BenefitType";
import { BenefitListItem } from "../constants";

function BenefitList() {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  const handleDetailsToggle = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <BenefitWrapper>
        <LeftSide>
          <LOGOImg src={CountryLogo} alt="" />
          <BenefitTexts>
            {BenefitListItem.map((item: BenefitTypes, index: number) => (
              <div>
                <BenefitText>{item.title}</BenefitText>
                <BenefitDetailText>{item.title1}</BenefitDetailText>
              </div>
            ))}
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
    </div>
  );
}

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
  width: 378px;
  height: 665px;
  border-radius: 15px;
  border: 1px solid #efefef;
  background: #f6f6f5;
  box-shadow: 0px 3px 10px 0px rgba(42, 193, 157, 0.3);
`;

const BenefitWrapper = styled.div`
  position: relative;
  width: 378px;
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

export default BenefitList;
