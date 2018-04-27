import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';

class HomePage extends Component {
    state = {
        redirectLink: null
    }
    render() {
        const { redirectLink } = this.state;
        if (redirectLink) {
            return <Redirect push to={redirectLink} />;
        }
        return (
            <div className="home-container splash-background">
                <div className="welcome">
                    <span className="title">Welcome to the World of E-Sports.</span>
                    <div className="button-group">
                        <button className="main-button" onClick={() => this.setState({ redirectLink: '/register' })}>Streamer? Get started</button>
                        <button className="main-button">How it works</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;