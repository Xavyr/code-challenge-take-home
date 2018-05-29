import React from 'react';
import Question from '../components/Question.jsx';

const generateQuestionComponents = (props) => {
  const questionComponents = [];
  for(let i = 0; i < props.loadedQuestions.results.length; i++) {
    questionComponents.push(
      <Question
        i={i}
        title={props.loadedQuestions.results[i].question}
        category={props.loadedQuestions.results[i].category}
        difficulty={props.loadedQuestions.results[i].difficulty}
        correctAnswer={props.loadedQuestions.results[i].correct_answer}
        answeredByUser={false}
        chosen={props.chosen}
      />
    )
  }
  return questionComponents;
}


const TriviaContainer = props => {
  const queue = generateQuestionComponents(props);
  const currentNumber = ((10 - queue.length) + '/10');
  return (
    <div>
      {queue[0]}
      {currentNumber}
    </div>
  )
}


export default TriviaContainer;