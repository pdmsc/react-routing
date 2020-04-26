import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NoMatch from './components/NoMatch';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render () {
    return (
        <div className="App">
          <nav>
            <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
              <li style={{ margin: '10px', display: 'inline-block' }}>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li style={{ margin: '10px', display: 'inline-block' }}>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/courses" component={Courses}></Route>
            <Route path="/users" component={Users}></Route>
            <Route component={NoMatch}></Route>
            <Route path="/all-courses">
              <Redirect to="/courses"></Redirect>
            </Route>
          </Switch>
        </div>
    );
  }
}

export default App;
