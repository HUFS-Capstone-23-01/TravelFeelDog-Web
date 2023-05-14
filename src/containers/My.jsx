import styled from "styled-components";

function My() {
    
  const Style = {
    Wrapper: styled.div`
      flex: 1;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        마이 페이지 컴포넌트
      </Style.Wrapper>
    </>
  );
}
  
export default My;