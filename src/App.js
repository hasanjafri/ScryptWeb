import React, { Component, Fragment } from 'react';
import { Router } from 'react-router-dom'
import ToastHandler from './components/widgets/ToastHandler';
import history from './helpers/history';
import Routes from './components/Routes';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Fragment>
                <ToastHandler />
                <Router history={history}>
                    <Fragment>
                        <Header />
                        <Routes />
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}

export default App;