import styled from "styled-components";
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Style = {
  Wrapper: styled.div`
    flex: 1;
  `,
  TitleWrap: styled.div`
    display: flex;
    align-items: center;
    padding-left: 5vw;

  `,
  Title: styled.div`
    font-size: 26px;
    font-weight: bold;
    padding: 5vh 1vw;
  `,
  Article: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    padding: 0 5vw 5vh 5vw;
  `,
  Content: styled.div`
    background-color: #F6F6F6;
    border-radius: 20px;
  `,
  WriteTitleWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vh 1vw 1vh 0;
  `,
  WriteName: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #878787;
    padding-right: 7vw;
  `,
  TitleInput: styled.input.attrs({ required: true })`
    width: 50vw;
    height: 6vh;
    border: 2px solid #C3C3C3;
    border-radius: 20px;
    font-size: 18px;
    text-align: center;
    background-color: #FFFFFF;
    &:focus {
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }
  `,
  WriteContentWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 1vh 0;
  `,
  ContentInputWrap: styled.div`
    width: 50vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #C3C3C3;
    border-radius: 20px;
    font-size: 18px;
    background-color: #FFFFFF;
  `,
  ContentInput: styled.textarea`
    width: 50vw;
    height: 55vh;
    border: none;
    font-size: 18px;
    background-color: #FFFFFF;
    resize: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
    &:focus {
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }
    &::-webkit-scrollbar {
      width: 15px;
      height: 55vh;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #878787;
      border-radius: 20px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #F6F6F6;
      border-radius: 20px;
      box-shadow: inset 0px 0px 5px #FFFFFF;
    }
  `,
  WriteImgWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 1vh 0;
  `,
  Imgs: styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  InputImgWrap: styled.form`
    padding: 4vh 0 5vh 0;
    margin: 1vh 2vw;
  `,
  InputImgBtn: styled.label`
    border: 2px solid #C3C3C3;
    border-radius: 20px;
    padding: 6vh 6vw;
    background-color: #FFFFFF;
  `,
  Image: styled.img`
    width: 10vw;
    height: 10vw;
    border-radius: 20px;
    margin: 1vh 2vw;
  `,
  WritingImg: styled.div`
    display: flex;
    align-items: start;
  `,
  ImgDelBtn: styled.button`
    border: none;
    background-color: transparent;
  `,
  WriteTagWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 1vh 0;
  `,
  TagInputWrap: styled.div`
    width: 50vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #C3C3C3;
    border-radius: 20px;
    font-size: 18px;
    background-color: #FFFFFF;
  `,
  TagInput: styled.input`
    width: 45vw;
    height: 5vh;
    text-align: center;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    &:focus {
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }
  `,
  TagBtn: styled.button`
    width: 5vw;
    height: 6vh;
    border: none;
    border-radius: 20px;
    background-color: #FFFFFF;
  `,
  TagWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 1vh 0;
  `,
  Tags: styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
  `,
  Tag: styled.div`
    display: flex;
    align-items: center;
    background: #94E0AC;
    border-radius: 10px;
    padding: 0.5vh 1vw 0.5vh 0.5vw;
    margin: 1vh 0.5vw;
  `,
  Txt: styled.div`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
  `,
  DelBtn: styled.button`
    background-color: transparent;
    border: none;
  `,
  SubmitBtnWrap: styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5vh;
  `,
  SubmitBtn: styled.button`
    background: linear-gradient(153.08deg, #81E768 8.35%, #94E0AC 53.55%);
    color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding: 1.5vh 3.5vw;
    font-size: 24px;
    font-weight: bold;
  `,
  Span: styled.span`
    color: red;
  `
};

function Writing() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    "memberToken" : "",
    "title" : "",
    "body" : "",
    "feedImageUrls" : [],
    "feedTags" : []
  });
  const [tagTxt, setTagTxt] = useState("");
  const [tagBlocks, setTagBlocks] = useState([]);
  const [previewImage, setPreviewImage] = useState(["","",""]);
  const [reqImage, setReqImage] = useState(["","",""]);

  const img1Input = useRef();
  const img2Input = useRef();
  const img3Input = useRef();

  const { memberToken, title, body, feedImageUrls, feedTags } = input;

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setInput({
        ...input,
        [name]:value
    });
  };

  const onChangeImg = (e, id) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        previewImage[id] = reader.result;
        reqImage[id] = e.target.files[0];
        setPreviewImage([...previewImage]);
        setReqImage([...reqImage]);
        resolve();
      };
    });
  };

  const deleteImg = (url) => {
    for(let i=0; i<3; i++) {
      if(previewImage[i] == url){
        previewImage[i] = "";
        reqImage[i] = "";
        setPreviewImage([...previewImage]);
        setReqImage([...reqImage]);
      }
    }
  }

  const createTag = () => {
    feedTags.push(tagTxt);
    setInput({...input, ["feedTags"]:feedTags});
    let newTag = (
      <Style.Tag key={tagBlocks.length}>
        <Style.DelBtn onClick={() => deleteTag(tagTxt)}><FontAwesomeIcon icon={faXmark} color="#FFFFFF" /></Style.DelBtn>
        <Style.Txt># {tagTxt}</Style.Txt>
      </Style.Tag>
    );
    let element = {
      id: tagTxt, 
      value: newTag
    };
    tagBlocks.push(element);
    setTagBlocks(tagBlocks);
  };

  const deleteTag = (id) => {
    setTagBlocks(oldValues => {
      return oldValues.filter(tagBlock => tagBlock.id != id)
    })
  }

  const postImage = () => {
    const formData = new FormData();
    for (let i=0; i<reqImage.length; i++) {
      formData.append('file', reqImage[i]);
    }
    
    for (const key of formData.keys()) {
      console.log(key);
    }
    for (const value of formData.values()) {
      console.log(value);
    }
    console.log(formData);
    axios.post(`/api/feed/post/uploadImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      if (res.status == 200) {
        setInput({
          ...input,
          ["feedImageUrls"]: res.data.body
        });
        console.log("이미지 업로드 성공");
      }
      console.log(input["feedImageUrls"])
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const LoginCheck = () => {
    let token = sessionStorage.getItem('token');
    if (token){
      setInput({
        ...input,
        ["memberToken"]: sessionStorage.getItem("token")
      });
      console.log("로그인 확인")
    } else {
      alert("로그인을 해주세요")
      navigate("/");
    }
  }

  const postWriting = () => {
    if(input["title"]){
      postImage();
      axios.post(`/api/feed/post`, input)
      .then((res) => {
        console.log(res);
        alert("글이 정상적으로 등록되었습니다");
        navigate("../pages/CommunityPage");
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert("글 제목은 필수입력입니다");
    }
    
  };

  useEffect(() => {
    LoginCheck();
  }, []);
  
  return (
    <>
      <Style.Wrapper>
        <Style.TitleWrap>
          <FontAwesomeIcon icon={faPencil} size="2x" color="#000000"/>
          <Style.Title>커뮤니티 글을 작성해주세요</Style.Title>
        </Style.TitleWrap>

        <Style.Article>
          <Style.Content>
            <Style.WriteTitleWrap>
              <Style.WriteName><Style.Span>*&nbsp;&nbsp;</Style.Span>글 제목</Style.WriteName>
              <Style.TitleInput
                type="text"
                name="title"
                onChange={onChangeInput}
                required
              ></Style.TitleInput>
            </Style.WriteTitleWrap>

            <Style.WriteContentWrap>
              <Style.WriteName>글 내용</Style.WriteName>
              <Style.ContentInputWrap>
                <Style.ContentInput
                  type="text"
                  name="body"
                  onChange={onChangeInput}
                ></Style.ContentInput>
              </Style.ContentInputWrap>
            </Style.WriteContentWrap>

            <Style.WriteImgWrap>
              <Style.WriteName>이미지&nbsp;</Style.WriteName>
              <Style.Imgs>
                {previewImage[0]? 
                <Style.WritingImg>
                  <Style.Image src={previewImage[0]}></Style.Image>
                  <Style.ImgDelBtn onClick={()=>deleteImg(previewImage[0])}><FontAwesomeIcon icon={faXmark} color="#C3C3C3"size="2x" /></Style.ImgDelBtn> 
                </Style.WritingImg>
                : 
                <Style.InputImgWrap>
                  <Style.InputImgBtn htmlFor="img1">
                    <FontAwesomeIcon icon={faCamera} size="2x" color="#C3C3C3"/>
                  </Style.InputImgBtn>
                  <input
                    type="file"
                    accept="image/*"
                    id="img1"
                    ref={img1Input}
                    style={{display: "none"}}
                    onChange={(e) => onChangeImg(e, 0)}
                  />
                </Style.InputImgWrap>}
                {previewImage[1]? 
                <Style.WritingImg>
                  <Style.Image src={previewImage[1]}></Style.Image>
                  <Style.ImgDelBtn onClick={()=>deleteImg(previewImage[1])}><FontAwesomeIcon icon={faXmark} color="#C3C3C3"size="2x" /></Style.ImgDelBtn> 
                </Style.WritingImg>
                : 
                <Style.InputImgWrap>
                  <Style.InputImgBtn htmlFor="img2">
                    <FontAwesomeIcon icon={faCamera} size="2x" color="#C3C3C3"/>
                  </Style.InputImgBtn>
                  <input
                    type="file"
                    accept="image/*"
                    id="img2"
                    ref={img2Input}
                    style={{display: "none"}}
                    onChange={(e) => onChangeImg(e, 1)}
                  />
                </Style.InputImgWrap>}
                {previewImage[2]? 
                <Style.WritingImg>
                  <Style.Image src={previewImage[2]}></Style.Image>
                  <Style.ImgDelBtn onClick={()=>deleteImg(previewImage[2])}><FontAwesomeIcon icon={faXmark} color="#C3C3C3"size="2x" /></Style.ImgDelBtn> 
                </Style.WritingImg>
                : 
                <Style.InputImgWrap>
                  <Style.InputImgBtn htmlFor="img3">
                    <FontAwesomeIcon icon={faCamera} size="2x" color="#C3C3C3"/>
                  </Style.InputImgBtn>
                  <input
                    type="file"
                    accept="image/*"
                    id="img3"
                    ref={img3Input}
                    style={{display: "none"}}
                    onChange={(e) => onChangeImg(e, 2)}
                  />
                </Style.InputImgWrap>}
              </Style.Imgs>
            </Style.WriteImgWrap>

            <Style.WriteTagWrap>
              <Style.WriteName>&nbsp;태그&nbsp;&nbsp;&nbsp;</Style.WriteName>
              <Style.TagInputWrap>
                <Style.TagInput
                  type="text"
                  name="feedTags"
                  onChange={(e) => setTagTxt(e.target.value)}
                ></Style.TagInput>
                <Style.TagBtn
                  onClick={createTag}
                ><FontAwesomeIcon icon={faPencil} size="2x" color="#A4A4A4"/>
                </Style.TagBtn>
              </Style.TagInputWrap>
            </Style.WriteTagWrap>

            <Style.TagWrap>
              <Style.WriteName>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Style.WriteName>
              <Style.Tags>
                {tagBlocks.map(tagBlock => {
                  return (
                    <>{tagBlock.value}</>
                  )
                })}
              </Style.Tags>
            </Style.TagWrap>  
          </Style.Content>
        </Style.Article>

        <Style.SubmitBtnWrap>
          <Style.SubmitBtn onClick={postWriting}>글쓰기</Style.SubmitBtn>
        </Style.SubmitBtnWrap>
      </Style.Wrapper>
    </>
  );
}
  
export default Writing;