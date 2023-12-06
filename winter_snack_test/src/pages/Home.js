import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/image/눈사람.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () =>{
    navigate('/question');

  }
    return(
        <>
        <Wrapper>
          <Header>☃겨울 간식 테스트☃</Header>
          <Contents>
             <Title>나와 비슷한 겨울 간식은?</Title>
             <LogoImage>
               <img src={PangImage} width={350} height={350}></img>
             </LogoImage>
             <Dese>간식들도 성격이 있다! 나랑 비슷한 간식을 찾아보자</Dese>
             <Button style={{ fontFamily: "omyu pretty "}} onClick={handleClickButton}
             >테스트 시작하기</Button>
             </Contents>
        </Wrapper>
        </>
    )
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 35pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "omyu pretty";
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "omyu pretty";
`
const Title = styled.div`
  font-size: 22pt;
  margin-top: 40px;
  font-family: "omyu pretty";
`

const LogoImage = styled.div`
margin-top: 10px;
`

const Dese = styled.div`
font-size: 15pt;
margin-top: 20px;
font-family: "omyu pretty";
`