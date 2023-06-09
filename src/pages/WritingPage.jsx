import Writing from "../containers/Writing";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};  

function WritingPage() {
  
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Writing></Writing>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default WritingPage;