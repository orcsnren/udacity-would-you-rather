import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, CardGroup} from 'react-bootstrap';

function Leaderboard() {
  const { users } = useSelector((state) => ({ ...state }));

  const userList = () => {
    let userArr = []

    debugger;
    Object.keys(users).forEach(userNameId => {
      const user = users[userNameId];
      const name = user.name;
      const answeredScore = Object.keys(user.answers).length;
      const questionScore = user.questions.length;
      const score = answeredScore + questionScore;
      const avatarURL = user.avatarURL;


      userArr.push({
        name: name,
        answeredScore: answeredScore,
        questionScore: questionScore,
        score: score,
        avatarURL: avatarURL
      })
    })

    return userArr
  }

  const sortedUsers = userList(users).sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <Container style={{ width: '500px' }}>
      <h1>Leaderboard</h1>
        <CardGroup className="m-8 d-block">
          {Object.entries(sortedUsers).map(([name, user]) => (
            <Card border="info" id={name} className='mb-2'>
              <Card.Img variant="top" src={user.avatarURL}/>
              <Card.Body>            
                <Card.Title className="mb-3">{user.name}</Card.Title>
                <Card.Text>Answered Questions: {user.answeredScore}</Card.Text>
                <Card.Text>Asked Questions: {user.questionScore}</Card.Text>
                <Card.Text><b>Total Score:</b> {user.score}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>

    </Container>
  );
}

export default Leaderboard;
