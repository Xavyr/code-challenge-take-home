import * as types from '../constants/actionTypes.js'

export const beginGame = () => {
  return (dispatch) => {
    const fetchedPromise = fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        return jsonResponse;
      });

    function payloadForReducer(jsonResponse) {
      return { type: types.BEGIN_GAME, payload: jsonResponse  }
    }

    return fetchedPromise.then(
      response => dispatch(payloadForReducer(response)),
    );
  }
};

export const chosen = (chosenAnswer) => {
  return {type: types.CHOSEN, payload: chosenAnswer.currentTarget.value}
}




