import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import RegistroEmpresa from '../pages/RegistroEmpresa'

function Routes() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ RegistroEmpresa }/>
    </Switch>
   </BrowserRouter>
  );
}

export default Routes;
