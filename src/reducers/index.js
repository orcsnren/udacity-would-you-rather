import { combineReducers } from 'redux'
import loggedUser from './loggedUser'
import users from './users'
import questions from './questions'
import spinner from './spinner'

import { QUESTION_ANSWER } from '../actions/questions'
export function questionAnswer(state = null, action) {
  switch (action.type) {
    case QUESTION_ANSWER:
      return action.answer;
    default:
      return state;
  }
}

export default combineReducers({
  loggedUser,
  users,
  questions,
  spinner,
  questionAnswer
});
