import styled from "styled-components";
import iconImg1 from "../img/login_icon1.png";
import email from "../img/email.png";

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
        justify-content: start;
        
    `,
    Subject: styled.div`
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      padding: 7vh 0;
    `,
    Contents: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    Img: styled.img`
        width: 15vw;
        height: 25vh;
        color: #F6F6F6;
    `
};

function Email() { 
  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Subject>이메일</Style.Subject>
          <Style.Contents>
            <Style.Detail>
              <Style.ImgIcon src={ iconImg1 }></Style.ImgIcon>
              해결되지 않은 추가 문의사항이 있다면 이메일 문의를 이용해주세요
            </Style.Detail>
            <Style.Detail>
              woowagongdol@gmail.com
            </Style.Detail>
          </Style.Contents>
          <Style.Img src={email}></Style.Img>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Email;