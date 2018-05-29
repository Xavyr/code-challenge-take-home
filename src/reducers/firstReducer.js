const initialState = {
  asyncData: false,
  gameBegun: false,
  chosenAnswer: null,
  loadedQuestions: null,
  answeredQuestions: []
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BEGIN_GAME':
      return {
        ...state,
        gameBegun: true,
        loadedQuestions: action.payload
      }
    case 'CHOSEN':
      let copiedAnsweredQuestions = Object.assign([], state.answeredQuestions);
      let recentAnswer = state.loadedQuestions.results[0];
      recentAnswer.userCorrect = (String(recentAnswer.correct_answer) === action.payload) ? 'yes' : 'no';
      copiedAnsweredQuestions.push(recentAnswer);
      let decrementedQuestions = state.loadedQuestions.results.slice(1);
      return {
        ...state,
        loadedQuestions: {results: decrementedQuestions},
        chosenAnswer: action.payload,
        answeredQuestions: copiedAnsweredQuestions
      }
    default:
      return state;
  }
};




export default firstReducer;



