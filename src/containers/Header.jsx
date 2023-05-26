import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import { signOut } from '../auth/firebaseAuth';

const Style = {
  Header: styled.div`
      width: 100%;
      height: auto;
      display: flex;
      padding-top: 1vh;
  `,
  LogoImg: styled.img`
      width: 200px;
      height: auto;
      padding: 0 1vw;
  `,
  Nav: styled.ul`
      display: flex;
      list-style-type: none;
      align-items: end;
  `,
  Menu: styled.li`
      padding: 0 3vw 0 3vw;
      font-size: 24px;
      font-weight: bold;
      &:hover{  
        background-image: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
        -webkit-background-clip: text;
        color: transparent;
      }
  `,
  Link: styled(Link)`
      text-decoration: none;
      color: #000000;
  `,
  BtnWrap: styled.div`
      display: flex;
      align-items: end;
      margin-left: auto;
      padding-right: 5vw;
  `,
  LoginBtn: styled.button`
      height: 50px;
      border: 2px solid #94E0AC;
      border-radius: 10%;
      background-image: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
      -webkit-background-clip: text;
      color: transparent;
      font-size: 18px;
      font-weight: bold;
      padding: 0 1vw;
      &:hover{  
        background: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
        color: #FFFFFF;
      }
  `,
  
};

function Header() {

  const user = sessionStorage.getItem('token');

  return (
    <>
      <Style.Header>
        <Link to="/"><Style.LogoImg src={logoImg}/></Link>
        <Style.Nav>
            <Style.Link to="../pages/ServiceIntroPage"><Style.Menu>서비스 소개</Style.Menu></Style.Link>
            <Style.Link to="../pages/CommunityPage"><Style.Menu>커뮤니티</Style.Menu></Style.Link>
            <Style.Link to="../pages/MyPage"><Style.Menu>마이페이지</Style.Menu></Style.Link>
        </Style.Nav>
        
        {user? (
          <Style.BtnWrap>
            <Style.Link to="../pages/MainPage"><Style.LoginBtn onClick={signOut}>로그아웃</Style.LoginBtn></Style.Link>
          </Style.BtnWrap>
        ):(
          <Style.BtnWrap>
            <Style.Link to="../pages/LoginPage"><Style.LoginBtn>로그인</Style.LoginBtn></Style.Link>
          </Style.BtnWrap>
        )}
        
      </Style.Header>
      
    </>
  );
}
  
export default Header;