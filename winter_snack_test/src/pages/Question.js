import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
    return (
        <Wrapper>
             <ProgressBar striped variant="success" now={40} style={{ marginTop: '20px'}}/>
             <Title>{QuestionData[0].title}</Title>
             <ButtonGruop>
               <Button style={{width:"40%", minHeight: "200px", fontSize: "15pt"}}>{QuestionData[0].answera}</Button>
               <Button style={{width:"40%", minHeight: "200px", fontSize: "15pt", marginLeft: '20px'}}>{QuestionData[0].answerb}</Button>
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
  font-size:40pt;
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