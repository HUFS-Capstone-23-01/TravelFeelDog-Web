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
        padding-bottom: 10vh;
    `,
    Subject: styled.div`
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      padding: 7vh 0;
    `,
    
};

function Email() { 

  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Subject>이메일</Style.Subject>
          
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Email;