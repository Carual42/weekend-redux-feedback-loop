import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';
import Understanding from '../Understanding';

function App() {

  const history= useHistory();

  const feeling = useSelector(store => store.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
      dispatch({type: 'SET_FEELING', payload: event.target.value});
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>
        How are you feeling today?
      </h2>
      <br />
      <h6>Feeling?</h6>
      <input value={feeling} onChange={handleChange} className="input" type="text" />
      <button onClick={() => history.push('/understanding')} className="button">Next</button>
      <Router>
                <div>
                    <Route exact path="/understanding">
                        <Understanding />
                    </Route>
                    {/* <Route exact path="/step/one">
                        <StepOne />
                    </Route>
                    <Route exact path="/step/two">
                        <StepTwo />
                    </Route>
                    <Route exact path="/step/three">
                        <StepThree />
                    </Route>
                    <Route exact path="/step/four">
                        <StepFour />
                    </Route>
                    <Route exact path="/summary">
                        <Summary />
                    </Route> */}
                </div>
            </Router>
    </div>
  );
}

export default App;
