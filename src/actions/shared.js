import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { spinner } from './spinner'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(spinner(true));
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      }).then(() => {
        dispatch(spinner(false));
      });
  }
}
