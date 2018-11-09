import React, { Component } from 'react';
import HomePage from '../components/HomePage.jsx';
import TriviaContainer from './TriviaContainer.jsx';
import AnswersContainer from './AnswersContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'

//styles for the board
const board = {
  margin: '0 auto',
  textAlign: 'center',
  width: '75%'
};

//potentially we could have an app with multiple games in which case we probably want different reducers
const mapStateToProps = (store) => {
  const { triviaGameReducer } = store || {}
  const { correctCount, gameBegun, loadedQuestions, chosenAnswer, answeredQuestions } = triviaGameReducer || {}
  return {
    correctCount: correctCount,
    gameBegun: gameBegun,
    loadedQuestions: loadedQuestions,
    chosenAnswer: chosenAnswer,
    answeredQuestions: answeredQuestions
  }
}

//the beginGame action makes the ajax call
const mapDispatchToProps = (dispatch) => {
  const { beginGame, chosen } = actions || {}
  return bindActionCreators({
    beginGame: beginGame,
    chosen: chosen
  }, dispatch)
};


class App extends Component {
  constructor(props) {
    super(props);
  }
  //this renderSwitch function is playing the part of React Router
  renderSwitch = ({ answeredQuestions, correctCount, beginGame, gameBegun, loadedQuestions, chosen }) => {
    //this final 'view' is the game results and scores
    if (answeredQuestions.length === 10) {
      return <AnswersContainer
        correctCount={correctCount}
        answeredQuestions={answeredQuestions}
        beginGame={beginGame}
      />
    }
    //if the game has not begun we render the 'Home' presentational component, passing the redux actions to kick off the game
    if (!gameBegun) {
      return <HomePage beginGame={beginGame} />
    }
    //if the game has begun we render the trivia container that renders child question components
    if (gameBegun) {
      return <TriviaContainer
        loadedQuestions={loadedQuestions}
        chosen={chosen}
      />
    }
  }

  render() {
    return (
      <div style={board}>
        {this.renderSwitch({ ...this.props })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);