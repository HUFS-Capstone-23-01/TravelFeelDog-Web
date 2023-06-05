import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
        padding-bottom: 10vh;
    `,
    Subject: styled.div`
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      padding: 7vh 0;
    `,
    List: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    QWrap: styled.div`
      width: 50vw;
      display: flex;
      padding: 2vh 0;
      align-items: center;
      justify-content: space-between;
    `,
    Question: styled.div`
        font-size: 20px;
        font-weight: bold;
    `,
    Btn: styled.button` 
      border: none;
      background-color: transparent;
    `,
    Answer: styled.div`
        width: 47vw;
        
        font-size: 16px;
        padding: 1vh 0 2vh 0;
    `,
};

function Inquiry() {  
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  
  const QAlist = [
    (
        <Style.List>
            <Style.QWrap>
              <Style.Question>Q. 여행필독서는 어떤 서비스인가요?</Style.Question>
              <Style.Btn
                onClick={() => setVisible1(!visible1)}
              >{visible1 ? <FontAwesomeIcon icon={faAngleUp} size="2x"/> :<FontAwesomeIcon icon={faAngleDown} size="2x"/>}</Style.Btn>
            </Style.QWrap>
            {visible1 && <Style.Answer>
                여행필독서는 반려동물 케어 서비스입니다.<br/>
                현재 앱, 웹 2가지 형태로 존재하며 웹에서는 커뮤니티 서비스를 사용하실 수 있습니다.<br/>
                앱에서는 반려동물 동반 여행을 위한 정보 제공, 추천 시스템 등 다양한 서비스를 제공하고 있습니다.
            </Style.Answer>}
        </Style.List>
    ),
    (
        <Style.List>
            <Style.QWrap>
              <Style.Question>Q. 커뮤니티 서비스는 어떻게 사용하면 되나요?</Style.Question>
              <Style.Btn
                onClick={() => setVisible2(!visible2)}
              >{visible2 ? <FontAwesomeIcon icon={faAngleUp} size="2x"/> :<FontAwesomeIcon icon={faAngleDown} size="2x"/>}</Style.Btn>
            </Style.QWrap>
            {visible2 && <Style.Answer>
                웹에서 제공하는 커뮤니티 서비스는 로그인을 하셔야 사용할 수 있는 서비스입니다.<br/>
                현재 여행필독서 회원이 아니라면 회원가입 후 로그인을 해주세요.<br/>
                커뮤니티에서는 회원들 간의 다양한 주제로 상호작용이 가능합니다.<br/>
                글을 작성할 수 있으며, 작성할 때 태그를 이용하실 수 있습니다.<br/>
                원하는 정보가 있을 경우 마찬가지로 태그를 통해 글을 검색할 수 있습니다.
            </Style.Answer>}
        </Style.List>
    ),
    (
        <Style.List>
            <Style.QWrap>
              <Style.Question>Q. 앱을 사용하고 싶은데 어떻게 해야 하나요?</Style.Question>
              <Style.Btn
                onClick={() => setVisible3(!visible3)}
              >{visible3 ? <FontAwesomeIcon icon={faAngleUp} size="2x"/> :<FontAwesomeIcon icon={faAngleDown} size="2x"/>}</Style.Btn>
            </Style.QWrap>
            {visible3 && <Style.Answer>
                웹 페이지 하단에 보시면 3개의 아이콘이 있습니다.<br/>
                그 중 가운데 강아지 아이콘을 클릭하시면 앱을 설치할 수 있는 곳으로 바로 이동이 가능합니다.<br/>
                그곳으로 이동해 앱을 설치하신 뒤 회원가입을 하시면 정상적으로 서비스를 사용하실 수 있습니다.
            </Style.Answer>}
        </Style.List>
    ),
    (
        <Style.List>
            <Style.QWrap>
              <Style.Question>Q. 마이페이지에 있는 레벨과 100이란 숫자는 무엇인가요?</Style.Question>
              <Style.Btn
                onClick={() => setVisible4(!visible4)}
              >{visible4 ? <FontAwesomeIcon icon={faAngleUp} size="2x"/> :<FontAwesomeIcon icon={faAngleDown} size="2x"/>}</Style.Btn>
            </Style.QWrap>
            {visible4 && <Style.Answer>
                서비스를 사용하면서 리뷰를 작성하시면 경험치처럼 리뷰력이 쌓입니다.<br/>
                이 리뷰력이 100이 되었을 때 레벨 업 하실 수 있으며, 레벨이 높을 수록 다양한 혜택을 드리고 있습니다.<br/>
                적극적으로 리뷰를 작성하시고, 더 많은 혜택을 누려보세요.
            </Style.Answer>}
        </Style.List>
    )
  ];

  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Subject>문의사항</Style.Subject>
          {QAlist}
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Inquiry;