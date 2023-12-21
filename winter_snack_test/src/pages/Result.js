import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import BackgroundImage from '../assets/image/배경.png';
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
          <BackgroundWrapper>
                    <BackgroundImageStyled src={BackgroundImage} alt="배경 이미지" />
                </BackgroundWrapper>
             <Title>결과 보기</Title>
             <LogoImage>
               <img src={resultData.image} width={350} height={350}></img>
             </LogoImage>
             <Dese>나와 비슷한 겨울 간식은 {resultData.name} 입니다.</Dese>
             <Dese2>{resultData.desc}</Dese2>
             <Dese2>{resultData.good}</Dese2>
             <ButtonStyled style={{ fontFamily: "omyu pretty "}} onClick={()=>navigate("/")}
             >테스트 다시하기</ButtonStyled>
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
  position: relative;
  z-index: 2;
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
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정합니다. */
  
`
const Title = styled.div`
  font-size: 22pt;
  margin-top: 150px;
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
font-size: 20pt;
margin-top: 20px;
font-family: "omyu pretty";
position: relative;
z-index: 2;
padding: 10px;
`

const Dese2 = styled.div`
font-size: 15pt;
margin-top: 20px;
font-family: "omyu pretty";
position: relative;
z-index: 2;
background-color: rgba(255, 255, 255, 0.5); /* 흰색 배경, 투명도 0.5 */
padding: 10px;
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
  object-fit: cover; /* 이미지가 컨테이너에 가득 차도록 설정합니다. */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; /* 배경 이미지를 가장 뒤로 이동시킵니다. */
  `

  const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 1;
  margin-top: 10px;
  background-color: #F08080 !important;
`;