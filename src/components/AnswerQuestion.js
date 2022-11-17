import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Button } from 'react-bootstrap';
import QuestionResponse from './QuestionResponse';

function AnswerQuestion() {

  const { users } = useSelector((state) => ({ ...state }));
  const { questions } = useSelector((state) => ({ ...state }));
  const { loggedUser } = useSelector((state) => ({ ...state }));
  const { questionAnswer } = useSelector((state) => ({ ...state }));
  const { id } = useParams()
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(handleAnswerQuestion({ qid: id, loggedUser, answer: e.target.id }));
  }

  const answeredKeys = Object.keys(users[loggedUser].answers);

  const view = () => {
    return answeredKeys.includes(id);
  }
  
  console.log(view());
  return (
    <div className="centered-container">
      <>
        {(!questionAnswer && !view()) ? (
          <Container className='centered-container'>
            <Card border="info" style={{ width: '500px' }}>
              <Card.Img variant="left" src={users[questions[id].author].avatarURL} />
              <Card.Body>
                <Card.Title>Asked By <b>{users[questions[id].author].name}</b></Card.Title>
                <Card.Text>
                  Would you rather...
                </Card.Text>
                <Button id="optionOne" variant="light" onClick={handleClick}>{questions[id].optionOne.text}</Button><br></br>
                <Button id="optionTwo" variant="dark" className='mt-2' onClick={handleClick} >{questions[id].optionTwo.text}</Button>
              </Card.Body>
            </Card>
          </Container>
        ) :
          (
            <QuestionResponse id={id} />
          )}
      </>
    </div>
  );
}

export default AnswerQuestion;
