import React from 'react';
import Answers from '../components/Answers.jsx';

const generateAnswerComponents = (props) => {
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
  const tally = props.correctCount + "/10";
  const allAnswers = generateAnswerComponents(props);
  return (
    <div>
      <h3>You Scored:</h3>
      { tally }
      { allAnswers }
      <button onClick={props.beginGame}>Play Again</button>
    </div>
  )
}


export default AnswerContainer;


