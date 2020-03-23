import React, { Component } from 'react';
import './Signin.css';
import { Button,Checkbox} from '@scuf/common';

class Signin extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid landing-page">
                
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-11  col-sm-7 col-md-7 col-lg-4">
                        <form>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 login-col">
                                <div className="login-header">
                                    <h2>Honeywell</h2>
                                    <h6>TRUSTFLOW</h6>
                                </div>
                                <div className="login-form">
                                
                                <form>
                                    <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        tabIndex="1"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        autoFocus
                                        autoComplete="on"
                                    />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            tabIndex="2"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            name="password"
                                        />
                                    </div>
                                </form>
                                        <div className="submit-section">
                                        <Checkbox
                                            label="Remember Me"
                                         />
                                        
                                        <Button type="primary" className="btn btn-blue"
                                            tabIndex="3"
                                             content="Sign in" />
                                        </div>
                                    <div className="forgot-passoword">
                                        <p>Forgot Password</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Signin;