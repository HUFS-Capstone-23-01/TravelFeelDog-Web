import My from "../containers/My";
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

function MyPage() {  
  
  return (
    <>
      <Style.Wrapper>
        <Header></Header>
        <My></My>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}

export default MyPage;