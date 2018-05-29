import React from 'react';
import Answers from '../components/Answers.jsx';

const generateAnswerComponents = (props) => {
  console.log('HERE!!!', props);
  const answerComponents = [];
  for(let i = 0; i < props.answeredQuestions.length; i++) {
    answerComponents.push(
      <Answers
        i={i}
        title={props.answeredQuestions[i].question}
        category={props.answeredQuestions[i].category}
        difficulty={props.answeredQuestions[i].difficulty}
        correctAnswer={props.answeredQuestions[i].correct_answer}
        userCorrect={props.answeredQuestions[i].userCorrect}
      />
    )
  }
  return answerComponents;
}


const AnswerContainer = props => {
  const allAnswers = generateAnswerComponents(props);
  return (
    <div>
      { allAnswers }
    </div>
  )
}


export default AnswerContainer;


