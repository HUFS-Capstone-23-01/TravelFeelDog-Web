import styled from "styled-components";

function Login() {
    
  const Style = {
    Wrapper: styled.div`
      flex: 1;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        로그인 페이지 컴포넌트
      </Style.Wrapper>
    </>
  );
}
  
export default Login;