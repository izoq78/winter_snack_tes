import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { ResultData } from '../assets/data/resultdata';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData, setResultData] = React.useState({});

    React.useEffect(()=>{
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti])

    console.log(resultData);

    return(
        <Wrapper>
          <Header>☃겨울 간식 테스트☃</Header>
          <Contents>
             <Title>결과 보기</Title>
             <LogoImage>
               <img src={resultData.image} width={350} height={350}></img>
             </LogoImage>
             <Dese>나와 비슷한 겨울 간식은 {resultData.name} 입니다.</Dese>
             <Dese>{resultData.desc}</Dese>
             <Dese>{resultData.good}</Dese>
             <Button style={{ fontFamily: "omyu pretty "}} onClick={()=>navigate("/")}
             >테스트 다시하기</Button>
             </Contents>
        </Wrapper>
    )
}

export default Result;

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