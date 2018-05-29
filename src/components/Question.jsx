import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//this question child component is passed via props the synchronous action 'chosen'. inside of actions that applies the button's value (true or false) to the question at the front of the queue
const Question = props =>
  <div>
    <Card>
      <CardContent>
        <h1>{props.category}</h1>
        <h3>{props.title}</h3>
        <div title={props.title} key={props.i} >
          <Button variant="raised" color="primary" value={"True"} onClick={props.chosen}>True</Button>
          <Button variant="raised" color="primary" value={"False"} onClick={props.chosen}>False</Button>
        </div>
      </CardContent>
    </Card>
  </div>


export default Question;