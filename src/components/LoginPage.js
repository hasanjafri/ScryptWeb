import React, { Component, Fragment } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="input-container">
                    <input class="pt-input" type="text" placeholder="Username" dir="auto" />
                </div>
                <div className="input-container">
                    <input class="pt-input" type="text" placeholder="Password" dir="auto" />
                </div>
                <button type="button" class="pt-button pt-fill">Login</button>
            </React.Fragment>
        )
    }
}

export default LoginPage;