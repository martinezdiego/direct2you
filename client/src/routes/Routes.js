import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import home from '../pages/Home'
import forgot from '../pages/Forgot'
import forgotok from '../pages/ForgotSuccess'

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ forgotok }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
