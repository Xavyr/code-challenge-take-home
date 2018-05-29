import React from 'react';
import Answers from '../components/Answers.jsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//In a similiar manner to the TriviaContainer we generate the results of the answered questions
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
  const tally = <h2>{props.correctCount + "/10"}</h2>;
  const allAnswers = generateAnswerComponents(props);
  return (
    <div>
      <Card>
        <CardContent>
          <h1>You Scored:</h1>
          { tally }
          { allAnswers }
        </CardContent>
      </Card>
      <Button variant="raised" color="primary" onClick={props.beginGame}>Play Again?</Button>
    </div>
  )
}


export default AnswerContainer;


