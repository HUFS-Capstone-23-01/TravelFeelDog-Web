import Footer from "../containers/Footer";
import Header from "../containers/Header";
import styled from "styled-components";
import RegisterForm from "../containers/RegisterForm";

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};

function RegisterPage() {  
  
  return (
    <>
        <Style.Wrapper>
            <RegisterForm></RegisterForm>
            <Footer></Footer>
        </Style.Wrapper>
    </>
  );
}
  
export default RegisterPage;