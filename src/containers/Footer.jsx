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
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
  `,
  List: styled.div`
      padding: 0 1.7vw;
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
            <Style.Link to="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=ko&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-kr-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065216954478_creativeid_535244992764_device_c&gclid=CjwKCAjwm4ukBhAuEiwA0zQxk-UHG4Z6cz3z6wy0HYXhu5Pv6X9ENFg3pHGKKLfZgmmV7Z14Aysf2BoC2hEQAvD_BwE&gclsrc=aw.ds"><Style.IconWrap><Style.IconImg src={iconImg}/></Style.IconWrap></Style.Link>
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