import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Style = {
  Wrapper: styled.div`
    flex: 1;
  `,
  SearchWrap: styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: end;
    justify-content: center;
  `,
  Search: styled.div`
    width: 40%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border:3px solid #94E0AC;
    border-radius: 20px;
  `,
  InputWrap: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    line-align: 100%;
  `,
  Input: styled.input`
    width: 90%;
    height: 90%;
    text-align: start;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
  `,
  SearchBtnWrap: styled.div`
    padding: 10px;
  `,
  SearchBtn: styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    box-shadow: none;
  `,
  WriteBtnWrap: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 10vw;
  `,
  WriteLink: styled(Link)`
    text-decoration: none;
  `,
  Link: styled(Link)`
    width: 80%;  
    text-decoration: none;
    color: #000000;
  `,
  WriteBtn: styled.button`
    background-color: transparent;
    outline: none;
    box-shadow: none;
    border: 2px solid #94E0AC;
    border-radius: 10px;
    background-image: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px 5px 10px;
    &:hover{  
      background: linear-gradient(93.08deg, #81E768 8.35%, #94E0AC 53.55%);
      color: #FFFFFF;
    }
  `,
  List: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-align: center;
    padding-top: 1vw;
  `,
  ListElement: styled.div`
    width: 80%;
    display: flex;
    align-items: start;
    justify-align: center;
    padding: 2vh 5vw;
    border-top: 1px solid #D7D7D7;
    border-bottom: 1px solid #D7D7D7;
  `,
  Img: styled.img`
    width: 15vw;
    height: 20vh;
    border-radius: 15px;
    flex: 4;
  `,
  Profile: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex: 1;
    padding: 0 2vw 0 2vw;
  `,
  Content: styled.div`
    flex: 10;
  `,
  Writer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    padding: 1vh 0;
  `,
  Txt: styled.div`
  `,
  Sub: styled.div`
    font-size: 14px;
    color: #A5A5A5;
  `,
  Func: styled.div`
    display: flex;
  `,
  Detail: styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 1vw 1vh 0;
  `,
  Count: styled.div`
    font-size: 14px;
    font-weight: bold;
    padding-left: 3px;
  `,
  TagList: styled.div`
    color: #226DFD;
    padding: 2vh 0;
    display: flex;
    flex-wrap: wrap;
  `,
  Tag: styled.div`
    padding-right: 1vw;
  `,
  Date: styled.div`
    font-size: 14px;
    color: #A5A5A5;
    flex: 2;
  `,
  PageList: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3vh 0;
  `,
  PageNum: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Num: styled.div`
    padding: 0 1vw;
  `,
  NextBtn: styled.button`
    border: none;
    background-color: transparent;
    &:hover{ 
      color: #81E768;
    }
    ${({isselected}) => 
      isselected ?`
        color: #81E768;
        font-weight: bold;
      ` 
      :`
        color: #000000;
      `
    }
  `,
};

function Community() {
  const [tag, setTag] = useState("");
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [pageClick, setPageClick] = useState([true, false, false, false, false, false, false, false, false, false]);

  const getData = () => {
    axios.get(process.env.REACT_APP_DB_HOST + `/feed/list?page=${page}`)
    .then((res) => {
      if( res.status == 200) {
        setDataList(res.data.body);
        console.log("데이터를 정상적으로 불러왔습니다")
      }
      else {
        console.log("데이터를 불러오는데 실패했습니다")
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const searchTag = () => {
    if (tag == "") {
      getData();
    } else {
      axios.get(process.env.REACT_APP_DB_HOST + `/feed/list/searchTag?page=${page}&tagContents=${[tag]}`)
      .then((res) => {
        if(res.status == 200) {
          setDataList(res.data.body);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  };

  const changePage = (count) => {
    if (page%10 == 0) {
      pageClick[9] = false;
    } else {
      pageClick[page%10-1] = false;
    }
    if (count%10 == 0) {
      pageClick[9] = true;
    } else {
      pageClick[count%10-1] = true;
    }
    setPageClick([...pageClick]);
    setPage(count);
    searchTag();
  };

  const nextPage = (direction) => {
    if (direction == "right") {
      for (let i=0; i<10; i++) {
        pageNumbers[i] += 10;
      }
      setPageNumbers([...pageNumbers]);
    } else {
      if (pageNumbers[0]-10 <= 0) {
        setPageNumbers([1,2,3,4,5,6,7,8,9,10]);
      } else {
        for (let i=0; i<10; i++) {
          pageNumbers[i] -= 10;
        }
        setPageNumbers([...pageNumbers]);
      }
    }
    setPage(pageNumbers[0]);
    searchTag();
  };

  useEffect(() => {
    searchTag();
  }, []);

  return (
    <>
      <Style.Wrapper>
        <Style.SearchWrap>
          <Style.Search>
            <Style.SearchBtnWrap>
              <Style.SearchBtn
                type="button"
                onClick={searchTag}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#94E0AC" size="3x" />
              </Style.SearchBtn>
            </Style.SearchBtnWrap>
            <Style.InputWrap>
              <Style.Input
                type="text"
                onChange={(e) => setTag(e.target.value)}
              ></Style.Input>
            </Style.InputWrap>
          </Style.Search>
        </Style.SearchWrap>

        <Style.WriteBtnWrap>
          <Style.WriteLink to="../pages/WritingPage">
            <Style.WriteBtn type="button">글쓰기</Style.WriteBtn>
          </Style.WriteLink>
        </Style.WriteBtnWrap>

        <Style.List>
          {dataList.map(data => {
            return (
              <Style.Link to={"../pages/CommunityWritingPage"} state={{feedId: data.feedId}} key={data.feedId}>
                <Style.ListElement>
                  <Style.Img src={data.feedImagesUrl}></Style.Img>
                  
                  <Style.Profile src={data.member.imageUrl}></Style.Profile>
                  
                  <Style.Content>
                    <Style.Writer>
                      <Style.Txt>{data.member.nickName}</Style.Txt>
                      <Style.Sub>Lv. {data.member.level}</Style.Sub>
                    </Style.Writer>
                    
                    <Style.Title>{data.title}</Style.Title>
                    
                    <Style.Func>
                      <Style.Detail>
                        <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                        <Style.Count>{data.likes}</Style.Count>
                      </Style.Detail>
                      <Style.Detail>
                        <FontAwesomeIcon icon={faStar} color="#FFE600" />
                        <Style.Count>{data.scraps}</Style.Count>
                      </Style.Detail>
                    </Style.Func>
                    
                    <Style.TagList>
                      {data.feedTagContents.map(tag => {
                        return (
                        <Style.Tag key={tag}># {tag}</Style.Tag>
                        )})}
                    </Style.TagList>
                  </Style.Content>
                  <Style.Date>{data.createdDateTime}</Style.Date>
                  <hr/>
                </Style.ListElement>
              </Style.Link>
            )})}
        </Style.List>

        <Style.PageList>
        <Style.NextBtn onClick={() => nextPage("left")}><FontAwesomeIcon icon={faChevronLeft} color="#94E0AC" size="2x" /></Style.NextBtn>
          <Style.PageNum>
            {pageNumbers.map(number => {
              return (
                <Style.NextBtn key={number} isselected={number == page? 1: 0} onClick={() => changePage(number)}><Style.Num>{number}</Style.Num></Style.NextBtn>
              )})
            }
          </Style.PageNum>
          <Style.NextBtn onClick={() => nextPage("right")}><FontAwesomeIcon icon={faChevronRight} color="#94E0AC" size="2x" /></Style.NextBtn>
        </Style.PageList>

      </Style.Wrapper>
    </>
  );
}
  
export default Community;