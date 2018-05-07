import React, { Component, Fragment } from 'react';
import { Popover , Position} from '@blueprintjs/core';
import history from '../helpers/history';

class LoginPopover extends Component {
    render() {
        return (
            <Popover position={Position.BOTTOM} content={
                <div className="login-container">
                    <div className="input-container-flex">
                        <label className="pt-label">
                            Username
                            <div className="pt-input-group">
                                <span className="pt-icon pt-icon-user"></span>
                                <input className="pt-input" type="text" dir="auto" />
                            </div>
                        </label>
                    </div>
                    <div className="input-container-flex">
                        <label className="pt-label">
                            Password
                            <div className="pt-input-group">
                                <span className="pt-icon pt-icon-lock"></span>
                                <input className="pt-input" type="password" dir="auto" />
                            </div>
                        </label>
                    </div>
                    <button type="button" className="pt-button pt-fill pt-intent-primary">Login</button>
                    <span onClick={() => history.push('/register')} className="link">Not Registered? Click here</span>
                </div>
            }>
                <Fragment>
                    Login
                </Fragment>
            </Popover>
        )
    }
}

export default LoginPopover;