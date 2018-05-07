import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import HomePage from './Home/HomePage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/register' component={RegisterPage}/>
        </Switch>
    )
};

export default Routes
