import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// allows us to navigate to another page
import {useHistory} from 'react-router-dom';
import Feeling from '../Feeling';
import Understanding from '../Understanding';
import Support from '../Support';
import Comment from '../Comment';

function App() {

  const history = useHistory();


  return (
    <div className='App'>
      <Router>
                <div>
                <Route exact path="/">
                        <Feeling />
                </Route>
                <Route exact path="/understanding">
                        <Understanding />
                </Route>
                <Route exact path="/support">
                        <Support />
                </Route>
                <Route exact path="/comment">
                        <Comment />
                </Route>
                </div>
            </Router>
    </div>
  );
}

export default App;
