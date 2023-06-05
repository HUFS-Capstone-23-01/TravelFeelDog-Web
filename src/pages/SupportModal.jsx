import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Support from "../modal/Support";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
};

function SupportModal() { 
    
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Support></Support>
        <Footer></Footer>
      </Style.Wrapper>
    </>
  );
}

export default SupportModal;