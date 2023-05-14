import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import Main from "../containers/Main";

function MainPage() {
  const Style = {
    Wrapper: styled.div`
      display: flex;
      flex-direction: column;
      height: 100vh;
    `,
  }  
  
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default MainPage;
