import styled from "styled-components";

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
        flex-direction: column;
        align-items: center;
        justify-content: start;
        
    `,
};

function Info() { 
  return (
    <>
      <Style.Wrapper>
        <Style.Article>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Info;