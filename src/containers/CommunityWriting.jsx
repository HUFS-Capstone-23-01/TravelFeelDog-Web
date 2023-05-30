import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
  DeleteBtn: styled.button`
    border: 2px solid #94E0AC;
    border-radius: 10px;
    background-color: #94E0AC;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
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
    padding-top: 5vh;
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
    padding: 10vh 0 0 0;
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
    ${({isactive}) => 
      isactive ?`
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
    ${({isactive}) => 
      isactive ?`
        background-color: #94E0AC;
        color: #FFFFFF;
      `:`
        background-color: #FFFFFF;
        color: #94E0AC;
      `
    }
  `,
  CommentInputWrap: styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #94E0AC;
    border-radius: 20px;
    margin: 10vh 0 5vh 0;
  `,
  CommentInput: styled.input`
    width: 90%;
    height: 6vh;
    border: none;
    font-size: 18px;
    text-align: left;
    color: #000000;
    outline: none;
    &:placeholder {
      color: #A5A5A5;
    }
  `,
  SendBtn: styled.button`
    width: 6%;
    height: 6vh;
    border: none;
    background-color: transparent;
    &:hover, &:active {
      .logo {
        color: #FFDD65;
      }
    }
  `,
  CommentWrap: styled.div`
    display: flex;
    flex-direction: column;
  `,    
  Comment: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Wrap: styled.div`
    display: flex;
    padding: 1vh 0;
  `,
  ContentWrap: styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
  `,
  CommentProfileImg: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0 2vw;
  `,
  CommentMember: styled.div`
    display: flex;
    padding-bottom: 0.5vh;
    font-weight: bold;
  `,
  CommentLevel: styled.div`
    padding: 0 1vw;
  `,
  CommentNickName: styled.div`
  `,
  CommentContent: styled.div`
    padding: 0 1vw;
  `,
  DeleteCommentBtn: styled.button`
    height: 25px;
    font-size: 12px;
    border: 2px solid #94E0AC;
    background-color: #94E0AC;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: bold;
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
  `,
};  

function CommunityWriting() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [likeState, setLikeState] = useState(false);
  const [scrapState, setScrapState] = useState(false);
  const [likeId, setLikeId] = useState(-1);
  const [scrapId, setScrapId] = useState(-1);
  const defaultImg = "https://tavelfeeldog.s3.ap-northeast-2.amazonaws.com/feed/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0%20%EA%B8%B0%EB%B3%B8.png";


  const getData = async () => {
    axios.get(`/api/feed/detail/static?feedId=${location.state.feedId}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }}
    ).then((res) => {setData(res.data.body);})
    .catch((err) => console.log(err));
  };

  const deleteData = () => {
    if (sessionStorage.getItem('token') == data.member.token) {
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
    } else {
      alert("글 삭제 권한이 없습니다.");
    }
    
  };

  const checkLikeState = async () => {
    const response = await axios.get(`/api/feedLike/all`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
    let id = response.data.body.filter(lst => lst.feedId == location.state.feedId);
    if (id.length == 0) {
      setLikeState(false);
    } else {
      setLikeId(id[0]);
      setLikeState(true);
    }
  }

  const checkScrapState = async () => {
    const response = await axios.get(`/api/scrap/all`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    });
    let id = response.data.body.filter(lst => lst.feedId == location.state.feedId);
    if (id.length == 0) {
      setScrapState(false);
    } else {
      setScrapId(id[0]);
      setScrapState(true);
    }
  }

  const setLikes = async () => {
    await checkLikeState();
    if (likeState) {
      await axios.delete(`/api/feedLike?feedLikeId=${likeId.feedLikeId}`,{
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body)
          alert("좋아요가 취소되었습니다.");
          setLikeState(false);
          setLikeId(-1);
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
        } else {
          console.log("이미 좋아요 하고 있음");
        }
        setLikeState(true);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const setScrap = async () => {
    await checkScrapState();
    if (scrapState) {
      await axios.delete(`/api/scrap?scrapId=${scrapId.scrapId}`,{
        headers: {
          Authorization: sessionStorage.getItem('token')
        }})
      .then((res) => {
        if(res.data.body)
          alert("스크랩이 취소되었습니다.");
          setScrapState(false);
          setScrapId(-1);
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
        } else {
          console.log("이미 스크랩 하고 있음");
        }
        setScrapState(true);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const getComment = async () => {
    axios.get(`/api/comment/all?feedId=${location.state.feedId}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }})
    .then((res) => {setComments(res.data.body); console.log(res);})
    .catch((err) => console.log(err));
  };

  const addComment = () => {
    axios.post(`/api/comment`, {
        "feedId": location.state.feedId,
        "content": inputComment
      }, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }})
    .then((res) => { window.location.reload(); })
    .catch((err) => console.log(err));
  };

  const deleteComment = (id) => {
    console.log(id);
    console.log(comments);
    axios.delete(`/api/comment/?commentId=${id}`, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }})
    .then((res) => {
      if(res.status == 200) {
        if (res.data.body) {
          alert("정상적으로 댓글이 삭제되었습니다");
          console.log("데이터 삭제 성공");
          window.location.reload();
        } else {
          alert("삭제 권한이 없습니다.");
        } 
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getData();
    checkLikeState();
    checkScrapState();
    getComment();
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
                <Style.Link to={"../pages/CommunityWritingPage"} state={{feedId: data.feedId}}><Style.DeleteBtn onClick={deleteData}>글 삭제</Style.DeleteBtn></Style.Link>
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
                {data.feedImageUrls[0] != defaultImg && data.feedImageUrls.map(img => {
                  return (
                  <Style.Img key={img} src={img}></Style.Img>
                  )})}
              </Style.ImgWrap>
              <Style.BtnWrap>
                <Style.LikeBtn isactive = {likeState? 1:0} onClick={setLikes}>
                  <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                  &nbsp;&nbsp;좋아요
                </Style.LikeBtn>
                <Style.ScrapBtn isactive = {scrapState? 1:0} onClick={setScrap}>
                  <FontAwesomeIcon icon={faStar} color="#FFE600" />
                  &nbsp;&nbsp;스크랩
                </Style.ScrapBtn>
              </Style.BtnWrap>
            </Style.BodyWrap>

            <Style.CommentInputWrap>
              <Style.CommentInput
                type="text"
                placeholder="댓글을 입력하세요."
                onChange={(e) => {setInputComment(e.target.value)}}
              ></Style.CommentInput>
              <Style.SendBtn onClick={addComment}>
                <FontAwesomeIcon className="logo" icon={faPaperPlane} size="2x" color="#94E0AC" />
              </Style.SendBtn>
            </Style.CommentInputWrap>
            <Style.CommentWrap>
              <Style.Comment>
                {comments && comments.map(comment => {
                return (
                <Style.Wrap key={comment.commentId}>
                  <Style.CommentProfileImg src={comment.memberImageUrl}></Style.CommentProfileImg>
                  <Style.ContentWrap>
                    <Style.CommentMember>
                      <Style.CommentLevel>Lv {comment.memberLevel}</Style.CommentLevel>
                      <Style.CommentNickName>{comment.memberNickName}</Style.CommentNickName>
                    </Style.CommentMember>
                    <Style.CommentContent>{comment.content}</Style.CommentContent>
                  </Style.ContentWrap>
                  <Style.DeleteCommentBtn onClick={() => {deleteComment(comment.commentId)}}>댓글 삭제</Style.DeleteCommentBtn>
                </Style.Wrap>
                )})}
              </Style.Comment>
            </Style.CommentWrap>
          </Style.Article>  
        }
      </Style.Wrapper>
    </>
  );
}
  
export default CommunityWriting;