import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { handleAddQuestion } from '../actions/questions'
import { useNavigate } from 'react-router-dom';

function AddQuestion() {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => ({ ...state }));
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(loggedUser, optionOne, optionTwo));
    setOptionOne('');
    setOptionTwo('');
    navigate('/');
  }

  const handleOptionOneChange = (e) => {
    setOptionOne(e.target.value);
  }

  const handleOptionTwoChange = (e) => {
    setOptionTwo(e.target.value);
  }

  return (
    <div className="centered-container">
      <div id="add_question">
        <h3>Create New question</h3>

        Would you rather ...

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleOptionOneChange} value={optionOne} />
          <div id="add_question_form_or">OR</div>
          <input type="text" onChange={handleOptionTwoChange} value={optionTwo} />
          <button>Ask</button>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion;
