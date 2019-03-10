
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
            <Route exact path='/' render={() => (
              <Overview />
            )} />
            <Route exact path='/projects' render={() => (
              <Projects />
            )} />
            <Route exact path='/teams' render={() => (
              <Teams />
            )} />
            <Route exact path='/employees' render={() => (
              <Employees />
            )} />
            <Route render={() => (
              <NotFound />
            )} />
          </Switch>
      </BrowserRouter>
    
    );
  }
}

export default App;