import React from 'react';
import Question from '../components/Question.jsx';

//i think this should be where the logic of handling right/wrong
//score should reside

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

//possibly use count- a count of question on reducer to only show one, rather than mutating the array
//or filter array by 'answered' property and then show count
// const handleAnswerChoice = (choice, question, qIndex, action) => {
//   console.log(choice, question, qIndex, action);
// }


const TriviaContainer = props => {
  const queue = generateQuestionComponents(props);
  //filtered queue by answered
  return (
    <div>
      {queue[0]}
    </div>
  )
}


export default TriviaContainer;