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
  return {
    correctCount: store.triviaGameReducer.correctCount,
    gameBegun: store.triviaGameReducer.gameBegun,
    loadedQuestions: store.triviaGameReducer.loadedQuestions,
    chosenAnswer: store.triviaGameReducer.chosenAnswer,
    answeredQuestions: store.triviaGameReducer.answeredQuestions
  }
}

//the beginGame action makes the ajax call
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    beginGame: actions.beginGame,
    chosen: actions.chosen
  }, dispatch)
};


class App extends Component {
  render() {
    //this renderSwitch function is playing the part of React Router
    const renderSwitch = () => {
      //this final 'view' is the game results and scores
      if(this.props.answeredQuestions.length === 10) {
        return <AnswersContainer
          correctCount={this.props.correctCount}
          answeredQuestions={this.props.answeredQuestions}
          beginGame={this.props.beginGame}
        />
      }
      //if the game has not begun we render the 'Home' presentational component, passing the redux actions to kick off the game
      if(!this.props.gameBegun) {
        return <HomePage
          beginGame={this.props.beginGame}
          gameBegun={this.props.gameBegun}
        />
      }
      //if the game has begun we render the trivia container that renders child question components
      if(this.props.gameBegun) {
        return <TriviaContainer
          loadedQuestions={this.props.loadedQuestions}
          chosen={this.props.chosen}
        />
      }
    }

    return (
      <div style={board}>
        {renderSwitch()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);