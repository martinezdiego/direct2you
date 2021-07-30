import React from 'react';
import { BrowserRouter, Switc, Route, Switch } from 'react-router-dom';

//Components
import Dashboard2 from '../pages/Dashboard2';
import Login from '../pages/login.js'

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
