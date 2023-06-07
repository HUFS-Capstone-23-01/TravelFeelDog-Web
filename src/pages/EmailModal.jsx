import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Email from "../modal/Email";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,     
};

function EmailModal() {  
    
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Email></Email>
        <Footer></Footer>
      </Style.Wrapper>
    </>
  );
}

export default EmailModal;