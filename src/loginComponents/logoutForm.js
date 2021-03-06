import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <div style={{ float: "right", marginRight: 5, fontSize: 15}}><Link onClick={handleClick} >Logout</Link></div>;
}

export default withRouter(LogoutButton);