import styled from "styled-components";

function Main() {
    
  const Style = {
    Wrapper: styled.div`
      flex: 1;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        메인 페이지 컴포넌트
      </Style.Wrapper>
    </>
  );
}
  
export default Main;