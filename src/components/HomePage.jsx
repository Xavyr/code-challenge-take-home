import React from 'react';

const HomePage = props =>
  <div>
    <h1>Welcome to the Trivia Challenge</h1>
    <h3>You will be presented with 10 True or False questions.</h3>
    <h3>Can you score 100%?</h3>
    <button onClick={props.beginGame}>BEGIN</button>
    {/*<button*/}
      {/*style={{display: 'inline', float: 'right'}}*/}
      {/*onClick={props.asyncAction}>AsyncAction*/}
    {/*</button>*/}
    {/*<br/>*/}
    {/*<h1 style={{display: 'inline', float: 'left'}}>{JSON.stringify(props.gameBegun)}</h1>*/}
    {/*<h1 style={{display: 'inline', float: 'right'}}>{JSON.stringify(props.asyncData)}</h1>*/}
  </div>


export default HomePage;