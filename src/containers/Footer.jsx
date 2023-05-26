import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import iconImg from "../img/icon.png";

const Style = {
  Footer: styled.div`
    width: 100%;
    height: auto;
    line-height: 3vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #94E0AC;
    text-align: center;
    color: #94E0AC;
    padding: 3vh 0 3vh 0 
  `,
  IconList: styled.div`
      display: flex;
      justify-content: space-around;
  `,
  IconWrap: styled.div`
      width: 64px;
      height: 60px;
      display: flex;
      background: #FFFFFF;
      border-radius: 50%;
      margin: 1vw;
  `,
  FontAwesomeIcon: styled(FontAwesomeIcon)`
      margin: auto;
      text-align: center;
      color: #94E0AC;
  `,
  IconImg: styled.img`
      width: 50px;
      height: 50px;
      margin: auto;
      border-radius: 50%;
  `,
  FooterList: styled.div`
      width: 10vw;
      display: flex;
      justify-content: space-around;
      color: #FFFFFF;
  `,
  List: styled.div`
      padding: 0, 2vw, 0, 2vw;
  `,
  Link: styled(Link)`
      text-decoration: none;
      color: #FFFFFF;
  `,
  Txt: styled.div`
      color: #FFFFFF;
  `,
  
};

function Footer() {  
  
  return (
    <>
      <Style.Footer>
        <Style.IconList>
            <Style.Link to="../pages/InquiryModal"><Style.IconWrap><Style.FontAwesomeIcon icon={faComments} size="2x"/></Style.IconWrap></Style.Link>
            <Style.Link to="https://www.naver.com/"><Style.IconWrap><Style.IconImg src={iconImg}/></Style.IconWrap></Style.Link>
            <Style.Link to="../pages/EmailModal"><Style.IconWrap><Style.FontAwesomeIcon icon={faEnvelope} size="2x"/></Style.IconWrap></Style.Link>
        </Style.IconList>
        
        <Style.FooterList>
            <Style.List><Style.Link to="../pages/InfoModal">Info</Style.Link></Style.List>
            <Style.List><Style.Link to="../pages/SupportModal">Support</Style.Link></Style.List>
            <Style.List><Style.Link to="../pages/PolicyModal">Policy</Style.Link></Style.List>
        </Style.FooterList>
        
        <Style.Txt>©️여행필독서</Style.Txt>
      </Style.Footer>
      
    </>
  );
}
  
export default Footer;