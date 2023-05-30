import Login from "../containers/Login";
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

function LoginPage() {  
  
  return (
    <>
      <Style.Wrapper>
        <Login></Login>
        <Footer></Footer>
    </Style.Wrapper>
    </>
  );
}
  
export default LoginPage;