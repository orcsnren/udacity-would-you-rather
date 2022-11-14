import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { handleAddQuestion } from '../actions/questions'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';

function NewQuestion() {
  const { loggedUser } = useSelector((state) => ({ ...state }));
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(loggedUser, optionOne, optionTwo));
    navigate('/');
  }

  return (

    <Container className='centered-container'>
      <Card border="info" style={{ width: '500px' }}>
        <Card.Body>
          <Card.Title className="mb-3">Would you rather...</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="controlId">
              <Form.Control className="mb-2" type="text" placeholder="enter option one" onChange={e => setOptionOne(e.target.value)} />
              <Card.Text className="ms-2">vs</Card.Text>
              <Form.Control type="text" placeholder="enter option two" onChange={e => setOptionTwo(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Ask
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewQuestion;
