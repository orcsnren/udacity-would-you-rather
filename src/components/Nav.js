import { setLoggedUser } from '../actions/loggedUser';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import React from 'react';

function Nav() {

  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => ({ ...state }))
  const { users } = useSelector((state) => ({ ...state }));

  const handleSignOut = () => {
    dispatch(setLoggedUser(''));
  }

  return (
    <nav>
      {loggedUser && (<>
        <div id="nav-links">
          <span ><Link to='/'>Answer Question</Link></span>
          <span ><Link to='/add'>New Question</Link></span>
          <span ><Link to='/leaderboard'>Leaderboard</Link></span>
        </div>
        <div id="nav-user">
          <Image src={users[loggedUser].avatarURL} width="30" height="30" />
          <span id="nav-sign-out" onClick={handleSignOut}>LOG OUT</span>
        </div>
      </>)}
    </nav>
  );
}

export default Nav;
