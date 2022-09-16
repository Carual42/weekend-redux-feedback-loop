import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';

function Comment() {

  const history= useHistory();

  const comment = useSelector(store => store.name);
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
        Any comments you want to leave?
      </h2>
      <br />
      <h6>Comments</h6>
      <input value={comment} onChange={handleChange} className="input" type="text" />
      <button onClick={() => history.push('/review')} className="button">Next</button>
    </div>
  );
}

export default Comment;