import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Style = {
  Wrapper: styled.div`
    flex: 1;
  `,
  TitleWrap: styled.div`
    display: flex;
    align-items: center;
    padding-left: 10vw;
  `,
  Title: styled.div`
    font-size: 26px;
    font-weight: bold;
    padding: 5vh 1vw;
  `,
  ProfileWrap: styled.div`
    display: flex;
    justify-content: start;
    padding-left: 10vw;
  `,
  ProfileImg: styled.img`
    width: 10vw;
    height: 15vh;
    border-radius: 50%;
  `,
  UserWrap: styled.div`
    padding: 0 1vw;
  `,
  Input: styled.input`
    padding-left: 1vw;
    font-size: 24px;
    border: none;
    outline: none;
    &::placeholder {
      color: #000000;
    }
  `,
  ChangeBtn: styled.button`
    border: none;
    background-color: transparent;
    &:hover, &:active {
      .logo {
        color: #000000;
      }
    }
  `,
  LvWrap: styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    padding-left: 1vw;
  `,
  Txt: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    padding: 2vh 0 1vh 0;
    background: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  `,
  LvTxt: styled.div`
  `,
  ExpTxt: styled.div`
  `,
  Bar: styled.div`
    height: 3vh;
    border-radius: 20px;
    background-color: #EFEFEF;
  `,
  BarCount: styled.div`
    width: ${(props) => props.width/60}vw;
    height: 3vh;
    border-radius: 20px;
    background-color: #94E0AC;
  `,
  Link: styled(Link)`
  width: 80%;  
  text-decoration: none;
  color: #000000;
  `,
  ListWrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-align: center;
  `,
  ListElement: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 2vw;
    border-top: 1px solid #D7D7D7;
    border-bottom: 1px solid #D7D7D7;
  `,
  Detail: styled.div`
  `,
  DelBtn: styled.button`
    border: 1px solid #94E0AC;
    border-radius: 10px;
    background-color: #94E0AC;
    color: #FFFFFF;
    font-weight: bold;
  `,
  TabWrap: styled.div`
    display: flex;
    padding: 6vh 0 0 10vw;
  `,
  LikeBtn: styled.button`
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border: 2px solid #94E0AC;
    background-color: #FFFFFF;
    color: #94E0AC;
    &:hover {
      background-color: #94E0AC;
      color: #FFFFFF;
    }
    ${({likestate}) => 
      likestate ?`
        background-color: #94E0AC;
        color: #FFFFFF;
      ` 
      :`
        background-color: #FFFFFF;
        color: #94E0AC;
      `
    }
  `,
  ScrapBtn: styled.button`
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border: 2px solid #94E0AC;
    background-color: #FFFFFF;
    color: #94E0AC;
    &:hover {
      background-color: #94E0AC;
      color: #FFFFFF;
    }
    ${({likestate}) => 
      likestate ?`
        background-color: #FFFFFF;
        color: #94E0AC;
      ` 
      :`
        background-color: #94E0AC;
        color: #FFFFFF;
      `
    }
  `,
};

function My() {  
  const [user, setUser] = useState();
  const [click, setClick] = useState(false);
  const [nickName, setNickName] = useState("");
  const [scrapList, setScrapList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [likestate, setLikestate] = useState(true);
  const navigate = useNavigate();

  const LoginCheck = () => {
    let token = sessionStorage.getItem('token');
    if (token){
      console.log("로그인 확인")
    } else {
      alert("로그인을 해주세요")
      navigate("/");
    }
  };

  const checkClick = () => {
    setClick(!click)
  };

  const changeNickName = () => {
    axios.put(`/api/member/profile/nick`, {
      "nickName" : nickName,
      "firebaseToken" : sessionStorage.getItem('token')
    })
    .then((res) => {
      if (res.status == 200) {
        alert("정상적으로 닉네임을 변경했습니다.");
        window.location.reload();
      } else {
        alert("중복 닉네임 : 사용 불가능한 닉네임입니다.")
      }
    })
  };

  const getUser = () => {
    axios.get(`/api/member`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      setUser(res.data.body);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const getScrap = () => {
    axios.get(`/api/scrap/all`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      let newInfo = [];
      for (let i=0; i<res.data.body.length; i++) {
        let scrapInfo = (
          <Style.Link to={"../pages/CommunityWritingPage"} state={{feedId: res.data.body[i].feedId}} key={res.data.body[i].scrapId}>
            {res.data.body ? <Style.ListElement>
              <Style.Detail>{res.data.body[i].title}</Style.Detail>
              <Style.DelBtn onClick={() => {deleteScrap(res.data.body[i].scrapId)}}>삭제</Style.DelBtn>
            </Style.ListElement> : alert("현재 스크랩한 글이 없습니다.")}
          </Style.Link>
        );
        newInfo.push(scrapInfo);
      }
      setLikestate(false);
      setScrapList(newInfo);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const getLike = () => {
    axios.get(`/api/feedLike/all`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      let newInfo = [];
      for (let i=0; i<res.data.body.length; i++) {
        let likeInfo = (
          <Style.Link to={"../pages/CommunityWritingPage"} state={{feedId: res.data.body[i].feedId}} key={res.data.body[i].likeId}>
            {res.data.body ? <Style.ListElement>
              <Style.Detail>{res.data.body[i].title}</Style.Detail>
              <Style.DelBtn onClick={() => {deleteLike(res.data.body[i].feedLikeId)}}>삭제</Style.DelBtn>
            </Style.ListElement> : alert("현재 좋아요한 글이 없습니다.")}
          </Style.Link>
        );
        newInfo.push(likeInfo);
      }
      setLikestate(true);
      setLikeList(newInfo);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const deleteLike = (id) => {
    axios.delete(`/api/feedLike?feedLikeId=${id}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      if(res.data.body) {
        alert("정상적으로 삭제되었습니다.");
        navigate("../pages/MyPage");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const deleteScrap = (id) => {
    axios.delete(`/api/scrap?scrapId=${id}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      if(res.data.body) {
        alert("정상적으로 삭제되었습니다.");
        navigate("../pages/MyPage");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    LoginCheck();
    getUser();
    getLike();
  }, []);

  return (
    <>
      {user && <Style.Wrapper>
        <Style.TitleWrap>
          <FontAwesomeIcon icon={faUser} size="2x"/>
          <Style.Title>프로필 관리</Style.Title>
        </Style.TitleWrap>

        <Style.ProfileWrap>
          <Style.ProfileImg src={user.imageUrl}></Style.ProfileImg>
          <Style.UserWrap>
            <Style.ChangeBtn onClick={changeNickName}><FontAwesomeIcon className="logo" icon={faPenToSquare} size="2x" color="#8D8D8D"/></Style.ChangeBtn>
            <Style.Input
              type="text"
              placeholder={click? "" : user.nickName}
              onClick={checkClick}
              onChange={(e) => {setNickName(e.target.value)}}
            ></Style.Input>
            <Style.LvWrap>
              <Style.Txt>
                <Style.LvTxt>Lv {user.level}</Style.LvTxt>
                <Style.ExpTxt>{user.exp}/100</Style.ExpTxt>
              </Style.Txt>
              <Style.Bar>
                <Style.BarCount width={user.exp*0.6*60}/>
              </Style.Bar>
          </Style.LvWrap>
          </Style.UserWrap>
        </Style.ProfileWrap>

        <Style.TabWrap>
          <Style.LikeBtn
            likestate={likestate? 1: 0}
            onClick={() => {
              setLikestate(true);
              getLike();
            }}
          >좋아요</Style.LikeBtn>
          <Style.ScrapBtn
            likestate={likestate? 1: 0}
            onClick={() => {
              setLikestate(false);
              getScrap();
            }}
          >스크랩</Style.ScrapBtn>
        </Style.TabWrap>
        <Style.ListWrap>
          {likestate ? likeList : scrapList}
        </Style.ListWrap>
      </Style.Wrapper>}
    </>
  );
}
  
export default My;