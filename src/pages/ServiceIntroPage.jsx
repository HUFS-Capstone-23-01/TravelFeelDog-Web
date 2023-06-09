import ServiceIntro from "../containers/ServiceIntro";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
}; 

function ServiceIntroPage() { 
  
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