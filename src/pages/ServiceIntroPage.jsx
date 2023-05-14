import ServiceIntro from "../containers/ServiceIntro";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";

function ServiceIntroPage() {
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
        <ServiceIntro></ServiceIntro>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default ServiceIntroPage;