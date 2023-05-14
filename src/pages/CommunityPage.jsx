import Community from "../containers/Community";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";


function CommunityPage() {
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
        <Community></Community>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default CommunityPage;