import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import home from '../pages/Home'
import forgot from '../pages/Forgot'

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ home }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
