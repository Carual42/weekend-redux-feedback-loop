import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';

function Support() {

  const history= useHistory();

  const support = useSelector(store => store.support);
  const dispatch = useDispatch();

  const handleChange = (event) => {
      dispatch({type: 'SET_SUPPORT', payload: event.target.value});
  }

  return (
    <div className='support'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        How well are you being supported?
      </h2>
      <br />
      <h6>Support?</h6>
      <input value={support} onChange={handleChange} className="input" type="text" />
      <button onClick={() => history.push('/comment')} className="button">Next</button>
    </div>
  );
}

export default Support;