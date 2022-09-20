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

  const nextBtn = (event) => {
    if (understanding.length === 0){
        alert('enter a number')
    } else {
        history.push('/support')
    }
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
      <input value={understanding} onChange={handleChange} className="input" type="number" />
      <button onClick={nextBtn} className="button">Next</button>
    </div>
  );
}

export default Understanding;