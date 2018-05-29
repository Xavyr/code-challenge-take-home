const initialState = {
  asyncData: false,
  gameBegun: false,
  loadedQuestions: null,
  answeredQuestions: [],
  chosenAnswer: null,
  correctCount: 0
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BEGIN_GAME':
      return {
        ...state,
        correctCount: 0,
        gameBegun: true,
        answeredQuestions: [],
        loadedQuestions: action.payload
      }
    case 'CHOSEN':
      let copiedAnsweredQuestions = Object.assign([], state.answeredQuestions);
      let recentAnswer = state.loadedQuestions.results[0];
      recentAnswer.userCorrect = (String(recentAnswer.correct_answer) === action.payload) ? 'yes' : 'no';
      console.log('userPicked', recentAnswer);
      copiedAnsweredQuestions.push(recentAnswer);
      let decrementedQuestions = state.loadedQuestions.results.slice(1);
      let userCorrectCount = state.correctCount;
      if(recentAnswer.userCorrect === 'yes') {
        userCorrectCount += 1;
      }

      return {
        ...state,
        correctCount: userCorrectCount,
        loadedQuestions: {results: decrementedQuestions},
        chosenAnswer: action.payload,
        answeredQuestions: copiedAnsweredQuestions
      }
    default:
      return state;
  }
};




export default firstReducer;



