import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { handleInitialData } from '../actions/shared'
import Spinner from './Spinner';
import Nav from './Nav';
import Login from './Login';
import QuestionsPage from './QuestionsPage';
import NewQuestion from './NewQuestion';
import AnswerQuestion from './AnswerQuestion';
import Leaderboard from './Leaderboard';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const { loggedUser } = useSelector((state) => ({ ...state }));
  const { spinner } = useSelector((state) => ({ ...state }));
  return (
    <BrowserRouter>
      <div id="App">
        <Nav />
        <main>
          {(spinner) ? <Spinner /> :
            <>{loggedUser ?
              <Routes>
                <Route path='/' exact element={<QuestionsPage />} />
                <Route path='/questions/:id' element={<AnswerQuestion />} />
                <Route path='/add' element={<NewQuestion />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
              </Routes>
              : <Login />}</>}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default connect()(App)