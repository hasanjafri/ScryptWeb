import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import LoginPopover from '../components/LoginPopover';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <span className="header-title header-item" onClick={() => this.props.history.push('/')}>Scrypt</span>
                    <span className="header-item">Browse Games</span>
                    <span className="header-item right">
                        <LoginPopover />
                    </span>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Header); 