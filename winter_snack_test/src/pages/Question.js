import React from 'react';
import styled from 'styled-components';
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
             <ProgressBar striped variant="success" now={(questionNo/QuestionData.length)*100} style={{ marginTop: '20px'}}/>
             <Title>{QuestionData[questionNo].title}</Title>
             <ButtonGruop>
               <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)}style={{width:"40%", minHeight: "200px", fontSize: "15pt"}}>{QuestionData[questionNo].answera}</Button>
               <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)}style={{width:"40%", minHeight: "200px", fontSize: "15pt", marginLeft: '20px'}}>{QuestionData[questionNo].answerb}</Button>
             </ButtonGruop>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Title = styled.div`
  font-size:35pt;
  text-align: center;
  font-family: "omyu pretty";
`

const ButtonGruop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "omyu pretty";
`