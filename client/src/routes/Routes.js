import React from 'react';
import { BrowserRouter, Switc, Route, Switch } from 'react-router-dom';

//Components
import Dashboard from '../pages/Dashboard';

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Dashboard }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
