import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router';
import Header from './components/Header';

class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Router />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default App;