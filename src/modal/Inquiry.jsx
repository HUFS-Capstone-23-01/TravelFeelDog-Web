import styled, { keyframes } from "styled-components";

const Style = {
    Wrapper: styled.div`
        width: 100%;
        height: 100%;
        flex: 1;
    `,
    Article: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
   
};

function Inquiry() {  

  return (
    <>
      <Style.Wrapper>
        <Style.Article>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Inquiry;