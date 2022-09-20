import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Review() {

  const history= useHistory();
  const dispatch = useDispatch();

  const reviewFeeling = useSelector(store => store.feeling);
  const reviewUnderstanding = useSelector(store => store.understanding);
  const reviewSupport = useSelector(store => store.support);
  const reviewComment = useSelector(store => store.comment);

  const handleSubmit = () => {
    axios({
        method: 'POST',
        url: '/feedback',
        data: {
            feeling: reviewFeeling,
            understanding: reviewUnderstanding,
            support: reviewSupport,
            comments: reviewComment,
        }
    }).then((response) => {
        // Clear all reducers
        dispatch({ type: 'CLEAR_ALL' });
        // Navigate to the Activity Log
        history.push('/submitted');
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong in POST review')
    })
}

  return (
    <div className='review'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        Review Your Feedback
      </h2>
      <br />
      <h6>Support?</h6>
      <h3>Feelings: {reviewFeeling}</h3>
      <h3>Understanding: {reviewUnderstanding}</h3>
      <h3>Support: {reviewSupport}</h3>
      <h3>Comments: {reviewComment}</h3>
      <button onClick={handleSubmit} className="button">SUBMIT</button>
    </div>
  );
}

export default Review;