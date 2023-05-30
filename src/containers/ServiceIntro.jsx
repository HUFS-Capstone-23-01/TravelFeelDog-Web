import styled from "styled-components";
import introArray from "../data/IntroData";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
  `,
};

function ServiceIntro() {     

  return (
    <>
      <Style.Wrapper>
        {introArray}
      </Style.Wrapper>
    </>
  );
}
  
export default ServiceIntro;