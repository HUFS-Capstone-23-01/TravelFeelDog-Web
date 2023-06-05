import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Inquiry from "../modal/Inquiry";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
}; 


function InquiryModal() { 
    
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Inquiry></Inquiry>
        <Footer></Footer>
      </Style.Wrapper>
    </>
  );
}

export default InquiryModal;