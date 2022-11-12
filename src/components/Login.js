import React, { useState } from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from '../actions/loggedUser';

function Login() {

  const { users } = useSelector((state) => ({ ...state }))
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setLoggedUser(name));
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (

    <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
          <h1>Welcome to the Would You Rather</h1><br></br>
            <Form onSubmit={handleSubmit}>
              <Form.Select onChange={handleChange} className="me-auto" aria-label="Select an user">
                {Object.entries(users).map(([key, value]) => (
                  <option key={key} value={value.id}>{value.name}</option>
                ))
                }
              </Form.Select>
              <Button className="mt-3" type="submit" variant="primary">Login</Button>
            </Form>
          </Col>
          <Col xs={3}></Col>
        </Row>
    </Container>
  );
}

export default Login;
