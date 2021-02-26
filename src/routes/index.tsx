import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Formfunc from '../pages/FormFunc';
import Landing from '../pages/Landing';
import Listafunc from '../pages/Listafunc';
import FormLocal from '../pages/FormLocal';
import FormQuest from '../pages/FormQuest';
import Formlogin from '../pages/FormLogin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path= '/Adm' component = {Listafunc} isPrivate/>
        <Route path= '/Func' component = {Formfunc} isPrivate/>
        <Route path= '/local' component = {FormLocal} isPrivate/>
        <Route path= '/quest' component = {FormQuest} isPrivate/>
        <Route path= '/login' component = {Formlogin} isPrivate/>
    <Route path="/dashboard" component={Landing} isPrivate />
  </Switch>
);

export default Routes;
