import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withCookies } from 'react-cookie';
import App2 from './App2'
import DeletedItems from './DeletedItems.js'
class App extends Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={App2} />
          <Route exact path='/deleteditems' component={DeletedItems} />
          
        </Switch>
      );
    }
  }
  
  export default withCookies(App);
  