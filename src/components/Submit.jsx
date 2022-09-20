import React from 'react';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';

function Submit() {

  const history= useHistory();

  return (
    <div className='submit'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        FEEDBACK!
      </h2>
      <br />
      <h6>Thank You!</h6>
      <button onClick={() => history.push('/')} className="button">Leave New Feedback</button>
    </div>
  );
}

export default Submit;