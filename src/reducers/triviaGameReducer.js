const initialState = {
  asyncData: false,
  gameBegun: false,
  loadedQuestions: null,
  answeredQuestions: [],
  chosenAnswer: null,
  correctCount: 0
}

//The action passed into our reducer comes from the dispatch.
const triviaGameReducer = (state = initialState, action) => {
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
      const { answeredQuestions, loadedQuestions, correctCount } = state || {}
      const { results } = loadedQuestions || {}

      let copiedAnsweredQuestions = Object.assign([], answeredQuestions);
      let recentAnswer = results[0];

      const { userCorrect, correct_answer } = recentAnswer || {}

      recentAnswer.userCorrect = (String(correct_answer) === action.payload) ? 'yes' : 'no';
      copiedAnsweredQuestions.push(recentAnswer);

      let decrementedQuestions = results.slice(1);
      let userCorrectCount = correctCount;

      if (recentAnswer.userCorrect === 'yes') {
        userCorrectCount += 1;
      }

      return {
        ...state,
        correctCount: userCorrectCount,
        loadedQuestions: { results: decrementedQuestions },
        chosenAnswer: action.payload,
        answeredQuestions: copiedAnsweredQuestions
      }
    default:
      return state;
  }
};


export default triviaGameReducer;



