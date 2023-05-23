import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInGoogle } from '../auth/firebaseAuth';
import iconImg1 from "../img/login_icon1.png";
import iconImg2 from "../img/login_icon2.png";
import { AuthProvider } from "./AuthProvider";

function Login() {
  const Style = {
    Wrapper: styled.div`
      width: 100%;
      height: 100%;
      flex: 1;
    `,
    Article: styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    Contents: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 0 6vh 0;
    `,
    Title: styled.div`
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      padding: 0 0 6vh 0;
    `,
    Detail: styled.div`
      display: flex;
      align-items: center;
      border: 1px solid #F6F6F6;
      border-radius: 20px;
      background: #F6F6F6;
      padding: 1vh 3vw;
      margin: 1vh 0;
      font-size: 18px;
      font-weight: bold;
    `,
    ImgIcon: styled.img`
      width: 40px;
      height: 40px;
      padding: 0 2vw 0 0;
    `,
    LoginBtn: styled.button`
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 15px;
      background: linear-gradient(94.1deg, #81E768 0%, #94E0AC 37.85%);
      color: #FFFFFF;
      padding: 2vh 5vw;
      font-size: 28px;
      font-weight: bold;
    `,
    Icon: styled.div`
      padding: 0 2vw 0 0;
      padding-top: 5px;
      float: left;
    `,
  }  
  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Contents>
            <Style.Title>간단한 로그인으로<br/>여행 필독서 서비스를 이용해보세요</Style.Title>
            <Style.Detail>
              <Style.ImgIcon src={ iconImg1 }></Style.ImgIcon>
              작성한 글을 포함한 커뮤니티 글들을 자유롭게 열람
            </Style.Detail>
            <Style.Detail>
              <Style.ImgIcon src={ iconImg2 }></Style.ImgIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;커뮤니티를 통한 다른 사람들과 정보 교류 활동&nbsp;&nbsp;&nbsp;
            </Style.Detail>
          </Style.Contents>

          <AuthProvider>
            <Style.LoginBtn onClick={signInGoogle}>
              <Style.Icon><FontAwesomeIcon icon={faGoogle} size="1x"></FontAwesomeIcon></Style.Icon>
              Google 로그인
            </Style.LoginBtn>
          </AuthProvider>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Login;