import React, { Component } from "react";
import "./Login.css"

class Login extends Component {
    render() {
        return(
            <div className="loginForm">
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input type="email"
                    className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="Email" />
                  <small id="helpId" className="form-text text-muted">Enter Your Email Here</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input type="password" className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="Password" />
                  <small id="helpId" className="form-text text-muted">Enter Password Here</small>
                </div>
            </div>
        )
    }
    
}

export default Login;