import styled from "styled-components";

function ServiceIntro() {
    
  const Style = {
    Wrapper: styled.div`
      flex: 1;
    `,
  }  

  return (
    <>
      <Style.Wrapper>
        서비스 소개 페이지 컴포넌트
      </Style.Wrapper>
    </>
  );
}
  
export default ServiceIntro;