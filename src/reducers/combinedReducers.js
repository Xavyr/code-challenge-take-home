import { combineReducers } from 'redux';
import triviaGameReducer from './triviaGameReducer.js'



const reducers = combineReducers({
  triviaGameReducer: triviaGameReducer
});


export default reducers;