import CommunityWriting from "../containers/CommunityWriting";
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

function CommunityWritingPage() { 
  
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <CommunityWriting></CommunityWriting>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default CommunityWritingPage;