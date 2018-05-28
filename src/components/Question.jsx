import React from 'react';

const Question = props =>
  <div>
    <h1>{props.title}</h1>
    <div title={props.title} key={props.i} >
      <button value={"True"} onClick={props.chosen}>True</button>
      <button value={"False"} onClick={props.chosen}>False</button>
    </div>
  </div>


export default Question;