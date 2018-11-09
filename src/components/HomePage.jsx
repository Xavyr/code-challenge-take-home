import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const HomePage = ({ beginGame }) =>
  <div>
    <Card>
      <CardContent>
        <h1>Welcome to the Trivia Challenge</h1>
        <h3>You will be presented with 10 True or False questions.</h3>
        <h3>Can you score 100%?</h3>
        <Button variant="raised" color="primary" onClick={beginGame}>BEGIN</Button>
      </CardContent>
    </Card>
  </div>


export default HomePage;