import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';

function Understanding() {

  const history= useHistory();

  const understanding = useSelector(store => store.understanding);
  const dispatch = useDispatch();

  const handleChange = (event) => {
      dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value});
  }

  return (
    <div className='understanding'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        How well are you understanding the content?
      </h2>
      <br />
      <h6>understanding?</h6>
      <input value={understanding} onChange={handleChange} className="input" type="text" />
      <button onClick={() => history.push('/support')} className="button">Next</button>
    </div>
  );
}

export default Understanding;