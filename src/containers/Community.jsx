import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    height: 60px;
    border-radius: 50%;
    flex: 1;
    padding: 0 1vw 0 2vw;
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
};

function Community() {

  return (
    <>
      <Style.Wrapper>
        <Style.SearchWrap>
          <Style.Search>
            <Style.SearchBtnWrap>
              <Style.SearchBtn
                type="button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#94E0AC" size="3x" />
              </Style.SearchBtn>
            </Style.SearchBtnWrap>
            <Style.InputWrap>
              <Style.Input></Style.Input>
            </Style.InputWrap>
          </Style.Search>
        </Style.SearchWrap>

        <Style.WriteBtnWrap>
          <Style.WriteLink to="../pages/WritingPage">
            <Style.WriteBtn type="button">글쓰기</Style.WriteBtn>
          </Style.WriteLink>
        </Style.WriteBtnWrap>

        <Style.List>
          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>

          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>

          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>

          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>

          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>

          <Style.Link to="../pages/CommunityWritingPage">
            <Style.ListElement>
              <Style.Img src="https://cdn.newstof.com/news/photo/202303/20152_20196_3216.jpg"></Style.Img>
              
              <Style.Profile src="https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png"></Style.Profile>
              
              <Style.Content>
                <Style.Writer>
                  <Style.Txt>달콤한 초코</Style.Txt>
                  <Style.Sub>Lv 45</Style.Sub>
                </Style.Writer>
                
                <Style.Title>귀여운 초코와 오랜만에 나들이 왔어요~</Style.Title>
                
                <Style.Func>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />
                    <Style.Count>25</Style.Count>
                  </Style.Detail>
                  <Style.Detail>
                    <FontAwesomeIcon icon={faStar} color="#FFE600" />
                    <Style.Count>10</Style.Count>
                  </Style.Detail>
                </Style.Func>
                
                <Style.TagList>
                  {[<Style.Tag>#여행</Style.Tag>, <Style.Tag>#산책</Style.Tag>, <Style.Tag>#나들이</Style.Tag>, <Style.Tag>#공원</Style.Tag>]}
                </Style.TagList>
              </Style.Content>
              <Style.Date>2023-04-28</Style.Date>
              <hr/>
            </Style.ListElement>
          </Style.Link>
        </Style.List>

        <Style.PageList>
          <FontAwesomeIcon icon={faChevronLeft} color="#94E0AC" size="2x" />
          <Style.PageNum>
            {[<Style.Num>1</Style.Num>, 
            <Style.Num>2</Style.Num>, 
            <Style.Num>3</Style.Num>, 
            <Style.Num>4</Style.Num>, 
            <Style.Num>5</Style.Num>,
            <Style.Num>6</Style.Num>,
            <Style.Num>7</Style.Num>,
            <Style.Num>8</Style.Num>,
            <Style.Num>9</Style.Num>,
            <Style.Num>10</Style.Num>]}
          </Style.PageNum>
          <FontAwesomeIcon icon={faChevronRight} color="#94E0AC" size="2x" />
        </Style.PageList>

      </Style.Wrapper>
    </>
  );
}
  
export default Community;