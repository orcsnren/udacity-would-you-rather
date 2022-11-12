import React from 'react';
import { Container, Row, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { questionAnswer } from '../actions/questions';


function Question(props) {

  const { users } = useSelector((state) => ({ ...state }));
  const { questions } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(questionAnswer(null));
  }

  const formatQuestion = (questionStr) => {
    const optionOne = questionStr.optionOne.text;
    const optionTwo = questionStr.optionTwo.text;
    return optionOne + ' vs ' + optionTwo
  }

  const author = () => {
    const user_id = questions[props.id].author;
    return users[user_id].name;
  }

  const avatarUrl = users[questions[props.id].author].avatarURL

  return (
    <>

      <div className="question-name">Asked By {author()}</div>
      <Container>
        <Row className='question mt-1'>
          <Stack direction='horizontal' gap={3} className='mt-2 mb-2'>
            <div className="question-avatar"><img width="100" height="100" alt='avatar' src={avatarUrl} /></div>
            <Stack direction='vertical' gap={1}>
              <div className='mt-1'>Would you rather</div>
              <div className='mt-1'>{formatQuestion(questions[props.id])}</div>
              <div className='mt-1'><Link to={`/questions/${props.id}`}> <button onClick={handleClick}>Answer Now</button></Link></div>
            </Stack>
          </Stack>
        </Row>
      </Container>

    </>
  );
}

export default Question;
