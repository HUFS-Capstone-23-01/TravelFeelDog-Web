import Login from "../containers/Login";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";

function LoginPage() {
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
        <Login></Login>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}
  
export default LoginPage;