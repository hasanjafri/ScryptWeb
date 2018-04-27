import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import LoginPage from '../components/LoginPage';
import twitchLogo from '../assets/images/twitchLogo.svg';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <span className="header-title header-item" onClick={() => this.props.history.push('/')}>Scrypt</span>
                    <span className="header-item">Browse Games</span>
                    <span className="header-item right">
                        <img src={twitchLogo} height="40px" />
                    </span>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Header);