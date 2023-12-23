import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/image/붕어빵_메인.png';
import BackgroundImage from '../assets/image/배경.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () =>{
    navigate('/question');

  }
    return(
        <Wrapper>
          <Contents>
             <Header>☃겨울 간식 테스트☃</Header>
             <BackgroundWrapper>
               <BackgroundImageStyled src={BackgroundImage} alt="배경 이미지" />
             </BackgroundWrapper>
             <Title>나와 비슷한 겨울 간식은?</Title>
             <LogoImage>
               <img alt = "메인사진"src={PangImage} width={350} height={350}></img>
             </LogoImage>
             <Dese>간식들도 성격이 있다! 나랑 비슷한 간식을 찾아보자</Dese>
             <ButtonStyled style={{ fontFamily: "omyu pretty "}} onClick={handleClickButton}
             >테스트 시작하기</ButtonStyled>
             <ButtonStyled style={{ fontFamily: "omyu pretty "}} onClick={()=>navigate("/note")}
             >여담</ButtonStyled>
             </Contents>
        
        </Wrapper>
    )
}

export default Home;

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
  position: relative;
  z-index: 1;
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

const LogoImage = styled.div`
margin-top: 10px;
position: relative;
  z-index: 2;
`

const Dese = styled.div`
font-size: 15pt;
margin-top: 20px;
font-family: "omyu pretty";
position: relative;
  z-index: 2;
`

const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 2;
  margin-top: 10px;
  background-color: #F08080 !important;
`;