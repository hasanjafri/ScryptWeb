import React, { Component, Fragment } from 'react';

class RegisterPage extends Component {
    render() {
        return (
            <div className="register-container">
                <h1>Register</h1>
                <div className="input-container">
                    <input className="pt-input" type="text" placeholder="Log in" dir="auto" />
                </div>
                <div className="input-container">
                    <input className="pt-input" type="text" placeholder="Register" dir="auto" />
                </div>
                <button type="button" class="pt-button pt-fill"></button>
            </div>
        )
    }
}

export default RegisterPage;