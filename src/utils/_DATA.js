import KenThompsonAvatar from '../assets/kenthompson.jpg'
import SteveJobsAvatar from '../assets/stevejobs.jpg'
import BillGatesAvatar from '../assets/billgates.jpg'

let users = {
  kenthompson: {
    id: 'kenthompson',
    name: 'Ken Thompson',
    avatarURL: KenThompsonAvatar,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd']
  },
  stevejobs: {
    id: 'stevejobs',
    name: 'Steve Jobs',
    avatarURL: SteveJobsAvatar,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  billgates: {
    id: 'billgates',
    name: 'Bill Gates',
    avatarURL: BillGatesAvatar,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'kenthompson',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['kenthompson'],
      text: 'Linux',
    },
    optionTwo: {
      votes: [],
      text: 'Microsoft'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'stevejobs',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'Apple Watch',
    },
    optionTwo: {
      votes: ['stevejobs', 'kenthompson'],
      text: 'Iphone'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'billgates',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: '.Net',
    },
    optionTwo: {
      votes: ['kenthompson'],
      text: 'C#'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'billgates',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['billgates'],
      text: 'Windows 11',
    },
    optionTwo: {
      votes: ['stevejobs'],
      text: 'Macos Catalina'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'stevejobs',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['stevejobs'],
      text: 'Apple Music',
    },
    optionTwo: {
      votes: ['billgates'],
      text: 'Spotify'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const loggedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [loggedUser]: {
          ...users[loggedUser],
          questions: users[loggedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ loggedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [loggedUser]: {
          ...users[loggedUser],
          answers: {
            ...users[loggedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([loggedUser])
          }
        }
      }

      res()
    }, 500)
  })
}