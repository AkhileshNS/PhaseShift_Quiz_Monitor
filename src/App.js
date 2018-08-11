import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Main from './containers/Main';
import Transfer from './containers/Transfer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route path='/transfer' component={Transfer} exact />
          <Route path='/' exact component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
