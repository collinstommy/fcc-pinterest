import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return <Router>
      <Route exact path="/" component={Home}>
      </Route>
    </Router>
  }
}

export default App;
