import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';

function Feeling() {

  const history = useHistory();

  const feeling = useSelector(store => store.feeling);
  const dispatch = useDispatch();

  const handleChange = (event) => {
      dispatch({type: 'SET_FEELING', payload: event.target.value});
  }

  return (
    <div className='understanding'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        How are you feeling today?
      </h2>
      <br />
      <h6>feeling?</h6>
      <input value={feeling} onChange={handleChange} className="input" type="text" />
      <button onClick={() => history.push('/understanding')} className="button">Next</button>
    </div>
  );
}

export default Feeling;