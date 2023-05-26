import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
    justify-content: center;
  `,
  Contents: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 6vh 0;
  `,
  Title: styled.div`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    padding: 0 0 6vh 0;
  `,
  InputWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
  Input: styled.input`
    display: flex;
    align-items: center;
    border: 2px solid #94E0AC;
    border-radius: 10px;
    padding: 2vh 3vw;
    margin: 1vh 0;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: #000000;

    &:focus {
      border-color: #94E0AC;
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }
  `,
  RegisterBtn: styled.button`
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 15px;
    background: linear-gradient(94.1deg, #81E768 0%, #94E0AC 37.85%);
    color: #FFFFFF;
    padding: 2vh 5vw;
    font-size: 28px;
    font-weight: bold;
  `,
};

const RegisterForm =  () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const registerSubmit = () => {
    console.log(sessionStorage.getItem('token'))
    console.log(nickname);
    axios.post(`/api/member`, {
        "nickName" : nickname,
        "firebaseToken" : sessionStorage.getItem('token')
    })
    .then((res) => {
        if(res.data.header.status === 200) {
            sessionStorage.setItem('nickname',nickname);
            console.log("회원가입 성공");
            alart("회원가입 성공")
            navigate("/");
        } else if (res.data.header.status === 500) {
          console.log("닉네임 양식 오류");
          alart("2글자 이상 16글자 이하로 작성해주세요.")
        } 
    })
    .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
    })
  };

  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Contents>
            <Style.Title>간단한 가입으로<br/>여행 필독서 서비스를 이용해보세요</Style.Title>
            <Style.InputWrap>
              <Style.Input 
                type='text'
                name="nickname"
                placeholder="닉네임을 입력하세요"
                onChange={(e) => setNickname(e.target.value)}
              ></Style.Input>
            </Style.InputWrap>
          </Style.Contents>

          <Style.RegisterBtn onClick={registerSubmit}>회원가입</Style.RegisterBtn>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
};

export default RegisterForm;