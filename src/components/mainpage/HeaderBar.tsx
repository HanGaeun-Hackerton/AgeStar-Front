import styled from "styled-components";
import { AgeStarLOGO, MyPage } from "../../assets/mainpage";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { MainPageHeaderBar } from "../constants";
import { HeaderBarMenuType } from "../../model/MainPage";

const HeaderBar = () => {
  const navigate = useNavigate();
  return (
    <HeaderMenuWrapper>
      <LOGOImg onClick={() => navigate("/main")} src={AgeStarLOGO} alt="LOGO" />
      <LOGOText>AgeStar</LOGOText>
      <MenuBarWrapper>
        {MainPageHeaderBar.map((item: HeaderBarMenuType, index: number) => (
          <HeaderMenu key={index}>{item.name}</HeaderMenu>
        ))}
      </MenuBarWrapper>
      <SearchBar />
      <MyPageImg
        src={MyPage}
        alt="mypage img"
        onClick={() => navigate("/mypage")}
      />
    </HeaderMenuWrapper>
  );
};

const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 80px;
  border-bottom: 1px solid rgba(190, 175, 175, 0.6);
  box-shadow: 0px 2px 5px 0px #000000;
`;

const LOGOImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px 0 17px 25px;
`;

const LOGOText = styled.p`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-left: 12px;
  margin-right: 100px;
`;

const HeaderMenu = styled.span`
  padding: 30px;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
`;

const MenuBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    font-weight: 700;
  }
  :visited {
    text-decoration: underline;
  }
`;

const MyPageImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 23px 50px 20px auto;
`;

export default HeaderBar;
