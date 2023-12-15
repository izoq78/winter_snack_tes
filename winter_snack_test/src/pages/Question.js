import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/image/배경.png';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0},
    { id: "SN", score: 0},
    { id: "TF", score: 0},
    { id: "JP", score: 0},
  ])

  const navigate = useNavigate();

  console.log('totalScore', totalScore);

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? {id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);
    if(QuestionData.length !== questionNo + 1){
      setQuestionNo(questionNo + 1);
    } else{
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0,1): curr.id.substring(1,2)),
          ""
      );

      navigate({
          pathname: "/result",
          search: `?${createSearchParams({
            mbti: mbti,
          })}`
      });
    }
    
  }

  
    return (
        <Wrapper>
          <ProgressBarStyled striped variant="success" now={(questionNo/QuestionData.length)*100} style={{ marginTop: '20px'}}/>
             <Contents>
             <BackgroundWrapper>{}
               <BackgroundImageStyled src={BackgroundImage} alt="배경 이미지" />
             </BackgroundWrapper>
             <Title>{QuestionData[questionNo].title}</Title>
             <ButtonGruop>
                <CustomButton onClick={() => handleClickButton(1, QuestionData[questionNo].type)}>
                    {QuestionData[questionNo].answera}
                </CustomButton>
                <CustomButton onClick={() => handleClickButton(0, QuestionData[questionNo].type)} style={{ marginLeft: '20px' }}>
                    {QuestionData[questionNo].answerb}
                </CustomButton>
             </ButtonGruop>
             </Contents>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden; 
`

const Title = styled.div`
  font-size:35pt;
  text-align: center;
  font-family: "omyu pretty";
  position: relative;
  z-index: 2;
`

const ButtonGruop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "omyu pretty";
  position: relative;
  z-index: 3;
  
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
  z-index: -1; /* 배경 이미지를 가장 뒤로 이동시킵니다. */
  `
  const Contents = styled.div`
  position: relative;
  z-index: 2;
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
const ProgressBarStyled = styled(ProgressBar)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px; /* 프로그래스바의 높이를 조절합니다. */
  margin-top: 20px;
  background-color: transparent; /* 배경을 투명하게 설정합니다. */
`;

const CustomButton = styled(Button)`
  && {
    background-color: #F08080; // 원하는 색상으로 변경하세요.
    width: 200px;
    min-height: 200px;
    font-size: 15pt;
    margin-left: 20px;
  }
`;