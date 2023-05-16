import styled from "styled-components";
import introArray from "../data/IntroData";
import Img1 from "../img/intro1.png";
import Img2 from "../img/intro2.png";
import Img3 from "../img/intro3.png";
import Img4 from "../img/intro4.png";
import Img5 from "../img/intro5.png";

function ServiceIntro() {   
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
      align-items: center;
      justify-content: center;
      padding: 5vh 0 5vh 3vw;
    `,
    Highlight: styled.span`
      background-image: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
      -webkit-background-clip: text;
      color: transparent;
    `,
    Title: styled.div`
      font-size: 38px;
      font-weight: bold;
      text-align: left;
      padding: 2vh 0;
    `,
    Detail: styled.div`
      font-size: 14px;
      color: #7F7F7F;
      text-align:left;
      padding: 2vh 0;
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
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        {introArray}
      </Style.Wrapper>
    </>
  );
}
  
export default ServiceIntro;