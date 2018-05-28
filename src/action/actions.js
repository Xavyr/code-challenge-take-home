import * as types from '../constants/actionTypes.js'
import questions from '../../questionsFromApi';

export const asyncAction = () => {
  return dispatch => {
    console.log('false => true in 3, 2, 1...');
    return setTimeout(function(){
      return dispatch({ type: types.ASYNC_ACTION, payload: true  })
    }, 3000);
  }
};

export const beginGame = () => {
  let loadedQuestions = questions;
  //RIGHT HERE NEED TO ADD ANSWERED? property to each question object
  return {type: types.BEGIN_GAME, payload: questions}
}

export const chosen = (chosenAnswer) => {
  //in sending over i, i gain acess to the attribute i want to call answered or not
  //dont need any extra infor do I?
  //console.log(chosenAnswer.target.parentElement); //use parent element to get all needed data for reducer
  return {type: types.CHOSEN, payload: chosenAnswer.target.value}
}




