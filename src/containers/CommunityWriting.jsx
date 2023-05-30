import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Style = {
  Wrapper: styled.div`
    flex: 1;
  `,
  Article: styled.div`
    padding: 10vh 20vw;
  `,
  HeaderWrap: styled.div`
    display: flex;
  `,
  ProfileImg: styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
  `,
  TitleWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 2vw 0 1vw;
    flex: 3;
  `,
  Title: styled.div`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 1vh;
  `,
  UserWrap: styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  Level: styled.div`
    font-size: 16px;
    padding-right: 10px;
  `,
  User: styled.div`
    font-size: 16px;
  `,
  SubWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    flex: 1;
  `,
  Date: styled.div`
    font-size: 18px;
    text-align: end;
  `,
  FunWrap: styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
  `,
  Likes: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2vw;
  `,
  Scrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2vw;
  `,
  Count: styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;
  `,
  BodyWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `,
  Content: styled.div`
    padding: 4vw 0 2vw 0;
  `,
  TagList: styled.div`
    display: flex;
    color: #226DFD;
    padding: 2vh 0;
    flex-wrap: wrap;
  `,
  Tag: styled.div`
    padding-right: 1vw;
    font-weight: bold;
  `,
  ImgWrap: styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  Img: styled.img`
    width: 15vw;
    height: 20vh;
    border-radius: 15px;
    margin: 0 2vw;
  `,
  BtnWrap: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
  `,
  LikeBtn: styled.button`
    padding: 0.5vh 0.7vw;
    margin: 0 2vw;
    border: none;
    background-color: #FFFFFF;
    border: 2px solid #94E0AC;
    border-radius: 15px;
    color: #94E0AC;
    font-size: 18px;
    font-weight: bold;
    &:hover{ 
      background-color: #94E0AC;
      color: #FFFFFF;
    }
    ${({isActive}) => 
      isActive ?`
        background-color: #94E0AC;
        color: #FFFFFF;
      `:`
        background-color: #FFFFFF;
        color: #94E0AC;
      `
    }
  `,
  ScrapBtn: styled.button`
    padding: 0.5vh 0.7vw;
    margin: 0 2vw;
    border: none;
    background-color: #FFFFFF;
    border: 2px solid #94E0AC;
    border-radius: 15px;
    color: #94E0AC;
    font-size: 18px;
    font-weight: bold;
    &:hover{ 
      background-color: #94E0AC;
      color: #FFFFFF;
    }
  `,
};  

function CommunityWriting() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [likeState, setLikeState] = useState(false);
  const [scrapState, setScrapState] = useState(false);
  const defaultImg = "https://tavelfeeldog.s3.ap-northeast-2.amazonaws.com/feed/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0%20%EA%B8%B0%EB%B3%B8.png";

  const getData = () => {
    axios.get(`/api/feed/detail/static?feedId=${location.state.feedId}`, {
    headers: {
      Authorization: sessionStorage.getItem('token')
    }})
    .then((res) => {
      if(res.status == 200) {
        setData(res.data.body);
        console.log(data);
        console.log("데이터 불러오기 성공");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const deleteData = () => {
    axios.delete(`/api/feed/detail?feedId=${location.state.feedId}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }})
      .then((res) => {
        if(res.status == 200) {
          alert("정상적으로 글이 삭제되었습니다");
          console.log("데이터 삭제 성공");
          navigate("../pages/CommunityPage");
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const setLikes = () => {
    if (likeState) {
      axios.delete(`/api/feedLike?scrapId=${data.feedLikeId}`,{
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body)
          alert("좋아요가 취소되었습니다.");
          setLikeState(false);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      axios.post(`/api/feedLike`, {
        "feedId": location.state.feedId
      }, {
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body) {
          console.log("좋아요 성공");
          setLikeState(res.data.body);
        } else {
          console.log("좋아요 취소");
          setLikeState(res.data.body);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const setScrap = () => {
    if (scrapState) {
      axios.delete(`/api/scrap?scrapId=${data.feedScrapId}`,{
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body)
          alert("스크랩이 취소되었습니다.");
          setLikeState(false);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      axios.post(`/api/scrap`, {
        "feedId": location.state.feedId
      }, {
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body) {
          console.log("스크랩 성공");
          setScrapState(res.data.body);
        } else {
          console.log("스크랩 취소");
          setScrapState(res.data.body);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Style.Wrapper>
        {data &&
          <Style.Article>
            <Style.HeaderWrap>
              <Style.ProfileImg src={data.member.imageUrl}></Style.ProfileImg>
              <Style.TitleWrap>
                <Style.Title>{data.title}</Style.Title>
                <Style.UserWrap>
                  <Style.Level>Lv. {data.member.level}</Style.Level>
                  <Style.User>{data.member.nickName}</Style.User>
                </Style.UserWrap>
              </Style.TitleWrap>
              <Style.SubWrap>
                <Style.Date>{data.createdDateTime}</Style.Date>
                <Style.FunWrap>
                  <Style.Likes>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>{data.likes}</Style.Count>
                  </Style.Likes>
                  <Style.Scrap>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>{data.scraps}</Style.Count>
                  </Style.Scrap>
                </Style.FunWrap>
              </Style.SubWrap>
            </Style.HeaderWrap>

            <Style.BodyWrap>
              <Style.Content>{data.body}</Style.Content>
              <Style.TagList>
                {data.feedTags.map(tag => {
                  return (
                  <Style.Tag key={tag}># {tag}</Style.Tag>
                  )})}
              </Style.TagList>
              <Style.ImgWrap>
                {data.feedImageUrls.map(img => {img != defaultImg? 
                  <Style.Img src={img}></Style.Img>: <Style.ImgWrap></Style.ImgWrap>
                })}
              </Style.ImgWrap>
              <Style.BtnWrap>
                <Style.LikeBtn isActive = {likeState} onClick={setLikes}>
                  <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                  &nbsp;&nbsp;좋아요
                </Style.LikeBtn>
                <Style.ScrapBtn isActive = {scrapState} onClick={setScrap}>
                  <FontAwesomeIcon icon={faStar} color="#FFE600" />
                  &nbsp;&nbsp;스크랩
                </Style.ScrapBtn>
              </Style.BtnWrap>
            </Style.BodyWrap>
          </Style.Article>  
        }
      </Style.Wrapper>
    </>
  );
}
  
export default CommunityWriting;