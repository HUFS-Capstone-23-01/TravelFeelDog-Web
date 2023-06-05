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
    Subject: styled.div`
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      padding: 7vh 0;
    `,
    Content: styled.div`
        width: 50vw;
        padding: 5vh 0;
    `,
};

function Policy() { 
  return (
    <>
      <Style.Wrapper>
        <Style.Article>
            <Style.Subject>이용약관</Style.Subject>
            <Style.Content>
                제 1조(목적)<br/>
                본 이용약관은 여행필독서(이하 "회사"이라 함)가 제공하는 반려동물 케어 웹 서비스(이하 "서비스"라 함)의 이용조건 및 절차, 회원과 회사의 권리, 의무 등
                기본적인 사항을 정함을 목적으로 합니다.<br/>
                <br/>
                제 2조(용어의 정의)<br/>
                1. "서비스"라 함은 회사가 제공하는 반려동물 케어와 관련된 정보, 예약, 결제 등의 서비스를 의미합니다.<br/>
                2. "회원"이라 함은 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.<br/>
                <br/>
                제 3조(이용계약의 체결)<br/>
                1. 회원이 되고자 하는 자는 회사가 요청하는 개인정보를 제공해야 합니다.<br/>
                2. 회사는 회원가입 요청자의 개인정보를 확인한 후 회원 가입을 승낙합니다.<br/>
                3. 회원 가입시 기재한 개인정보는 정확하게 유지하고, 변동 사항이 있을 경우 즉시 수정해야 합니다.<br/>
                <br/>
                제 4조(서비스 제공 및 변경)<br/>
                1. 회사는 회원에게 서비스를 제공합니다. 다만, 일부 서비스는 회사의 정책에 따라 추후 유료로 제공될 수 있습니다.<br/>
                2. 회사는 서비스의 내용을 상시 변경하거나 중단할 수 있으며, 이 경우 회사는 변경 및 중단 사항을 사전에 회원에게 공지합니다.<br/>
                <br/>
                제 5조(회원의 권리와 의무)<br/>
                1. 회원은 본인의 개인정보를 보호해야 하며, 타인의 개인정보를 도용하거나 부정한 용도로 사용해서는 안 됩니다.<br/>
                2. 회원은 서비스를 이용할 때 관련 법령, 본 약관 및 회사의 지침을 준수해야 합니다.<br/>
                3. 회원은 서비스 이용 중 발생하는 모든 활동에 대한 책임을 부담해야 하며, 회사의 사전 승인없이 서비스를 악용하거나 타인에게 피해를 주는 행위를 해서는 안 딥니다.<br/>
                4. 회원은 서비스를 이용하여 얻은 정보를 상업적인 목적으로 사용하거나 제 3자에게 제공하거나 공유해서는 안 됩니다.<br/>
                5. 회원은 서비스를 이용하여 타인에게 피해를 주거나 불법적인 행위를 하는 등 서비스의 안전과 원활한 운영을 방해하는 행위를 해서는 안 됩니다.<br/>
                <br/>
                제 6조(개인정보 보호)<br/>
                1. 회사는 회원의 개인정보를 서비스 제공과 관련된 목적으로만 사용하며, 회원의 동의 없이 타인에게 제공하지 않습니다. 단, 관련 법령에 의해 요구되는 경우 예외로 합니다.<br/>
                2. 회사는 회원의 개인정보를 보호하기 위해 최선의 노력을 다하며, 개인정보 처리에 관한 사항은 별도의 개인정보 처리방침에서 정의합니다.<br/>
                <br/>
                제 7조(서비스의 중단)<br/>
                1. 회사는 다음과 같은 경우 서비스의 제공을 중단할 수 있습니다.<br/>
                    - 서비스 제공을 위한 기술적인 사유가 있는 경우<br/>
                    - 법령상의 장애가 있는 경우<br/>
                    - 서비스 운영에 필요한 설비의 보수 등을 위해 필요한 경우<br/>
                2. 회사가 서비스의 중단을 결정하는 경우, 회원에게 사전에 통지하여야 합니다.<br/>
                <br/>
                제 8조(책임 제한)<br/>
                1. 회사는 회원이 서비스를 이용함으로써 얻은 정보의 정확성, 신뢰성 및 안전성에 대해서는 어떠한 책임도 지지 않습니다.<br/>
                2. 회사는 회원 간 또는 회원과 제 3자 간의 거래, 분쟁 등에 대해서는 개입하지 않으며, 그로 인한 손실이나 피해에 대해서는 어떠한 책임도 지지 않습니다.<br/>
                <br/>
                제 9조(분쟁의 해결)<br/>
                본 약관에 따른 분쟁에 대해서는 대한민국의 관련 법률에 따라 해결하여야 하며, 회사와 회원간의 협의에 의해 원만히 해결되지 않는 경우에는 관할 법원의 전속관할로 합니다.<br/>
                <br/>
                이상이 여행필독서 이용약관입니다.
            </Style.Content>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Policy;