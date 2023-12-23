import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/image/배경.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Note = () => {
  const navigate = useNavigate();
    return(
        <Wrapper>
          <Contents>
             <Header>☃겨울 간식 테스트☃</Header>
             <BackgroundWrapper>
               <BackgroundImageStyled src={BackgroundImage} alt="배경 이미지" />
             </BackgroundWrapper>
             <Title>여담</Title>
             <Dese>
                <p style={{textAlign: 'center'}}>안녕하세요!<br/>
                테스트 개발자 박유정입니다.<br/>
                리액트 사용이 처음이라서 배치라든지 코드라든지 미흡한 점이 많습니다.<br/>
                테스트는 재미로 즐겨주세요!<br/>
                문의사항은 인스타그램 xz_izoq로 연락 보내주시면 됩니다.<br/>
                감사합니다 :)
                </p>
             </Dese>
             <ButtonStyled style={{ fontFamily: "omyu pretty "}} onClick={()=>navigate("/")}
             >뒤로가기</ButtonStyled>
             </Contents>
        
        </Wrapper>
    )
}

export default Note;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

`

const Header = styled.div`
  font-size: 35pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "omyu pretty";
  position: relative;
  z-index: 1;
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "omyu pretty";
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BackgroundImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  `

const Title = styled.div`
  font-size: 22pt;
  margin-top: 40px;
  font-family: "omyu pretty";
  position: relative;
  z-index: 2;
`

const Dese = styled.div`
  font-size: 15pt;
  margin-top: 20px;
  font-family: "omyu pretty";
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
`

const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 2;
  margin-top: 10px;
  background-color: #F08080 !important;
`;