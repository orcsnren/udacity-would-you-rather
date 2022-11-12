import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { addQuestionResponseToUser, addQuestionToUser } from './users';
import { spinner } from './spinner'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export const questionAnswer = (answer) => {
  return {
    type: QUESTION_ANSWER,
    answer
  }
}

const answerQuestion = ({ loggedUser, qid, answer }) => {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    loggedUser,
    answer,
  };
};

export const handleAnswerQuestion = info => {
  return (dispatch) => {
    dispatch(spinner(true));
    dispatch(questionAnswer(info.answer));
    saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info));
        dispatch(addQuestionResponseToUser(info))
      }).then(() => {
        dispatch(spinner(false));
      })
    return saveQuestionAnswer(info).catch(() => {
      alert('An error occured while answering question');
    });
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  };
}


export const handleAddQuestion = (loggedUser, optionOne, optionTwo) => {
  return (dispatch) => {
    dispatch(spinner(true));
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: loggedUser
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question))
        dispatch(spinner(false));
      })
      .catch(() => {
        alert('An error occured while adding a question')
      })
  }
}
