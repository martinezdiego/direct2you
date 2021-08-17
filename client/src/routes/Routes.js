import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Registro from '../pages/Registro'

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Registro }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
