import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Info from "../modal/Info";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
};

function InfoModal() {  
    
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Info></Info>
        <Footer></Footer>
      </Style.Wrapper>
    </>
  );
}

export default InfoModal;