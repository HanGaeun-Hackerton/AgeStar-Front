import React from "react";
import styled from "styled-components";
import { IDetailInformation } from "../../model/MyPage";
import { MyPageInformation } from "../constants";
import { ProfilePhoto, ChangePhoto } from "../../assets/mainpage";

const UserInfo = () => {
  return (
    <>
      <ContentWrapper>
        <ImageWrapper>
          <ProFileImage src={ProfilePhoto} alt="img" />
          <ChangePhotoImg src={ChangePhoto} alt="" />
        </ImageWrapper>
      </ContentWrapper>
      {MyPageInformation.map((item: IDetailInformation, index: number) => (
        <div key={index}>
          <UserName>{item.name}</UserName>
          <UserID>{item.id}</UserID>
          <UserBirth>{item.birth}</UserBirth>
        </div>
      ))}
    </>
  );
};

const UserName = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-top: 28px;
`;

const UserID = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  margin-top: 15px;
`;

const UserBirth = styled.div`
  text-align: center;
  font-size: 15px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 94px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ProFileImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ChangePhotoImg = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0;
  bottom: 0;
`;

export default UserInfo;
