import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_QUESTION_RESPONSE_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id]
        }
      }
    case ADD_QUESTION_RESPONSE_TO_USER:
      return {
        ...state,
        [action.loggedUser]: {
          ...state[action.loggedUser],
          answers: {
            ...state[action.loggedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state
  }
}
