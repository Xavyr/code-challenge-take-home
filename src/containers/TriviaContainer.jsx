import React from 'react';
import Question from '../components/Question.jsx';

//creates an array of question components that acts as a queue, showing the next in line at a time
const generateQuestionComponents = (loadedQuestions, chosen) => {
  const { results } = loadedQuestions || {}
  return results.map((r, i) => {
    const { question, category, difficulty, correct_answer } = r || {}
    return (
      <Question
        i={`${question} ${i}`}
        title={question}
        category={category}
        difficulty={difficulty}
        correctAnswer={correct_answer}
        answeredByUser={false}
        chosen={chosen}
      />
    )
  })
}

const TriviaContainer = ({ loadedQuestions, chosen }) => {
  const queue = generateQuestionComponents(loadedQuestions, chosen);
  const currentNumber = ((10 - queue.length) + '/10');
  return (
    <div>
      {queue[0]}
      {currentNumber}
    </div>
  )
}


export default TriviaContainer;