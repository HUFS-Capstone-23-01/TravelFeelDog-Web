import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Policy from "../modal/Policy";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
};

function PolicyModal() {  
    
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Policy></Policy>
        <Footer></Footer>
      </Style.Wrapper>
    </>
  );
}

export default PolicyModal;