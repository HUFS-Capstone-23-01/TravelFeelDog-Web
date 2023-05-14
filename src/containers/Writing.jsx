import styled from "styled-components";

function Writing() {
    
  const Style = {
    Wrapper: styled.div`
      flex: 1;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        글작성 페이지 컴포넌트
      </Style.Wrapper>
    </>
  );
}
  
export default Writing;