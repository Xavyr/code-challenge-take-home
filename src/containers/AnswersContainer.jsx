import React from 'react';
import Answers from '../components/Answers.jsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//In a similiar manner to the TriviaContainer we generate the results of the answered questions
const generateAnswerComponents = (answeredQuestions) => {
  return answeredQuestions.map((q, i) => {
    return (<Answers
      key={`${q.question} ${i}`}
      title={q.question}
      category={q.category}
      difficulty={q.difficulty}
      correctAnswer={q.correct_answer}
      userCorrect={q.userCorrect}
    />)
  })
}


const AnswerContainer = props => {
  const { correctCount, answeredQuestions, beginGame } = props || {}
  const tally = <h2>{`${correctCount}/10`}</h2>;
  const allAnswers = generateAnswerComponents(answeredQuestions);
  return (
    <div>
      <Card>
        <CardContent>
          <h1>You Scored:</h1>
          {tally}
          {allAnswers}
        </CardContent>
      </Card>
      <Button variant="raised" color="primary" onClick={beginGame}>Play Again?</Button>
    </div>
  )
}


export default AnswerContainer;


