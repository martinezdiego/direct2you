import React from 'react';
import { BrowserRouter, Switc, Route, Switch } from 'react-router-dom';

//Components
import Dashboard2 from '../pages/Dashboard2';

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Dashboard2 }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
