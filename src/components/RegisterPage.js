import React, { Component, Fragment } from 'react';

class RegisterPage extends Component {
    state = {
        isStreamer: false
    }
    showTerms = event => {
        event.preventDefault();
    }
    render() {
        const { isStreamer } = this.state;
        return (
            <div className="register-container">
                <div className="pt-card pt-elevation-3 register-card animated fadeInUp">
                    <div className="register-title-container">
                        <span className="register-title">Register {isStreamer ? 'Streamer' : 'User'}</span>
                        <span className="link" onClick={() => this.setState({ isStreamer: !isStreamer })}>Are you a {isStreamer ? 'better' : 'streamer'}?</span>
                    </div>
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
                    <div className="input-container-flex">
                        <label className="pt-label">
                            Confirm Password
                            <div className="pt-input-group">
                                <span className="pt-icon pt-icon-lock"></span>
                                <input className="pt-input" type="password" dir="auto" />
                            </div>
                        </label>
                    </div>
                    <div className="input-container-flex">
                        <label className="pt-label">
                            E-mail
                            <div className="pt-input-group">
                                <span className="pt-icon pt-icon-envelope" />
                                <input className="pt-input" type="text" dir="auto" />
                            </div>
                        </label>
                    </div>
                    <label className="pt-control pt-checkbox">
                        <input type="checkbox" />
                        <span className="pt-control-indicator" />
                        <span>I consent that I am at least 18 years old</span>
                    </label>
                    <label className="pt-control pt-checkbox">
                        <input type="checkbox" />
                        <span className="pt-control-indicator"></span>
                        <span>I have read the <span className="link" onClick={(event) => this.showTerms(event)}>Terms And Conditions</span></span>
                    </label>
                    { isStreamer ? 
                        '' : ''
                    }
                    <div className="button-group">
                        <button className="main-button">
                            register 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage;