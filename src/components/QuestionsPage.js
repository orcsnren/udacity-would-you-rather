import React, { useState } from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Question from './Question';
function QuestionsPage() {

  const { loggedUser } = useSelector((state) => ({ ...state }));
  const { users } = useSelector((state) => ({ ...state }));
  const { questions } = useSelector((state) => ({ ...state }));
  const [tab, setTab] = useState('unanswered');

  const answeredKeys = Object.keys(users[loggedUser].answers)
  const unansweredKeys = Object.keys(questions).filter(qid => !answeredKeys.includes(qid))

  const handleTab = (button) => {
    setTab(button.target.id);
  }

  const targetQuestions = () => {
    return tab === 'unanswered' ? answeredKeys : unansweredKeys;
  }

  return (
    <div className="centered-container">
      <div id="questions-container">
        <Row>
          <ButtonGroup>
            <Button id='unanswered' variant="light" onClick={handleTab}>Unanswered Questions</Button>
            <Button id='answered' variant="secondary" onClick={handleTab}>Answered Questions</Button>
          </ButtonGroup>
        </Row>
        <div id="questions">
          {targetQuestions().map((id) => {
            return (
              <div className="question-item" key={id}>
                <Question id={id} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
