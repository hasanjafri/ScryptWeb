import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './Home/HomePage';

const Router = () => (
    <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
    </Switch>
);

export default Router
