import styled, { keyframes } from "styled-components";
import mainImg from "../img/main1.png";
import subImg from "../img/main2.png";

function Main() {

  const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  } to {
    opacity: 1;
    transform: translateZ(0);
  }`;

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
      align-items: center;
      justify-content: center;
    `,
    Contents: styled.div`
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding: 5vh 0 5vh 10vw;
    `,
    Title: styled.div`
      font-size: 38px;
      font-weight: bold;
      text-align: left;
      padding: 2vh 0;
      animation: ${fadeIn} 2s;
    `,
    Detail: styled.div`
      font-size: 24px;
      text-align:left;
      padding: 2vh 0;
      animation: ${fadeIn} 2s;
    `,
    ImgContents: styled.div`
      width: 50%;
      display: flex;
      align-items: end;
      justify-content: center;
      padding: 5vh 3vw 5vh 0;
    `,
    Img: styled.img`
      padding: 0 1vw 0 0;
      animation: ${fadeIn} 2s;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Contents>
            <Style.Title>반려동물 동반 여행 서비스</Style.Title>
            <Style.Detail>
              여행필독서는<br/>
              반려동물과 더불어 살아가는 바쁜 사회 속에서<br/>
              잠시 쉬어갈 수 있도록<br/>
              좋은 추억을 만들 수 있도록<br/>
              서비스를 제공하는데 최선을 다합니다.
            </Style.Detail>
          </Style.Contents>

          <Style.ImgContents>
            <Style.Img src={mainImg}></Style.Img>
            <Style.Img src={subImg}></Style.Img>
          </Style.ImgContents>
        </Style.Article>
        
      </Style.Wrapper>
    </>
  );
}
  
export default Main;