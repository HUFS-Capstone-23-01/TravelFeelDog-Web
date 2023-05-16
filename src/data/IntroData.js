import styled from "styled-components";
import Img1 from "../img/intro1.png";
import Img2 from "../img/intro2.png";
import Img3 from "../img/intro3.png";
import Img4 from "../img/intro4.png";
import Img5 from "../img/intro5.png";

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
      padding: 10vh 0;
    `,
    Contents: styled.div`
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
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
      padding: 5vh 0 5vh 7vw;
    `,
    Img: styled.img`
      padding: 0 1vw 0 0;
    `,
};  

const introArray = [
    (
        <Style.Article>
        <Style.ImgContents>
            <Style.Img src={Img1}></Style.Img>
            <Style.Img src={Img2}></Style.Img>
        </Style.ImgContents>

        <Style.Contents>
            <Style.Title>
            <Style.Highlight>간편한 검색으로</Style.Highlight><br/>
            알고 싶은 정보를 한눈에<br/>
            찾아보세요.
            </Style.Title>
            <Style.Detail>
            카테고리별, 키워드별 검색 기능을 제공해드려요.<br/>
            반려견부터 장소에 대한 정보를 한눈에 볼 수 있어요.<br/>
            (다음 기능은 앱에서만 제공합니다.)
            </Style.Detail>
        </Style.Contents>
        </Style.Article>
    ),
    (
        <Style.Article>
          <Style.ImgContents>
            <Style.Img src={Img3}></Style.Img>
            <Style.Img src={Img4}></Style.Img>
          </Style.ImgContents>
    
          <Style.Contents>
            <Style.Title>
              <Style.Highlight>다양한 리뷰로</Style.Highlight><br/>
              리뷰력을 올려 레벨업과 동시에<br/>
              혜택을 누려보세요.
            </Style.Title>
            <Style.Detail>
            리뷰를 작성하면 리뷰력이 올라가요.<br/>
            리뷰력을 모두 채워 레벨업하면 혜택을 받을 수 있어요.<br/>
            (다음 기능은 앱에서만 제공합니다.)
            </Style.Detail>
          </Style.Contents>
        </Style.Article>
    ),
    (
        <Style.Article>
          <Style.ImgContents>
            <Style.Img src={Img5}></Style.Img>
          </Style.ImgContents>
    
          <Style.Contents>
            <Style.Title>
              <Style.Highlight>커뮤니티 활동으로</Style.Highlight><br/>
              다른 사람들에게<br/>
              자신의 반려견 지식을 뽐내보세요.
            </Style.Title>
            <Style.Detail>
            자유롭게 글을 작성하고, 다른사람들이 작성한 글을 열람할 수 있어요.<br/>
            스크랩 기능과 좋아요 기능도 활용해보세요.<br/>
            (다음 기능은 웹에서만 제공합니다.)
            </Style.Detail>
          </Style.Contents>
        </Style.Article>
    )
];



export default introArray;