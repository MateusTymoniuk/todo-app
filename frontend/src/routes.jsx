import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Todo from './components/todo/todo';
import About from '../src/components/about';

export default props => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/todos"
        component={ Todo } />
      <Route
        exact
        path="/about"
        component={ About } />
      <Redirect from='*' to='/todos' />
    </Switch>
  </BrowserRouter>
)


