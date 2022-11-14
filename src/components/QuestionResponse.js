import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card } from 'react-bootstrap';

function QuestionResponse(props) {
    const { users, questions } = useSelector((state) => ({ ...state }));
    const { id } = props;

    const totalVotes = () => {
        return questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length;
    }

    const votePercentage = (votes) => {
        return (100 / totalVotes() * votes).toFixed(0)
    }

    const optionOneVotes = questions[id].optionOne.votes.length;
    const optionTwoVotes = questions[id].optionTwo.votes.length;

    return (

        <Container className='centered-container'>
            <Card border="info" style={{ width: '500px' }}>
                <Card.Img variant="left" src={users[questions[id].author].avatarURL} />
                <Card.Body>
                    <Card.Title>Asked By <b>{users[questions[id].author].name}</b></Card.Title>
                    <Card.Text>
                        Would you rather...
                    </Card.Text>
                    <Card.Text>
                        {questions[id].optionOne.text}
                    </Card.Text>
                    <ProgressBar variant="info" now={votePercentage(optionOneVotes)} label={`${votePercentage(optionOneVotes)}%`} /><br></br>
                    <Card.Text>
                        {questions[id].optionTwo.text}
                    </Card.Text>
                    <ProgressBar variant="info" now={votePercentage(optionTwoVotes)} label={`${votePercentage(optionTwoVotes)}%`} />
                </Card.Body>
            </Card>
        </Container>
    )

}

export default QuestionResponse;