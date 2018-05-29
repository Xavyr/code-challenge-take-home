import React from 'react';

const Answers = props =>
  <div>
    <h1>{props.title}</h1>
    <div>
      {"correct Answer: " + props.correctAnswer}
      <br/>
      {"Were You Correct? " + props.userCorrect}
      <br/>
      {"category: " + props.category}
      <br/>
      {"difficulty: " + props.difficulty}
      <br/>
    </div>
  </div>


export default Answers;