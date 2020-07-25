import React from 'react';

class Register extends React.Component {
    render() {
        <div className="user-login"id="login-div">
            <h2>SIGN UP</h2>
            <form className="login-form" >
                <p>
                    <label htmlFor="user">Username:</label>
                    <input type="text" name="user" placeholder="Username" onChange={this.handleUpdate} value={this.state.user} />
                </p>
                <p>
                    <label htmlFor="passcode">Password:</label>
                    <input type="password" name="passcode" placeholder="Password" onChange={this.handleUpdate} value={this.state.passcode} /> 
                </p>   
                <button className="submit-button" onClick={this.handleClick}>Login</button>           
            </form>
            <button className="register-button"><Link to="/register" className="link">Register</Link></button>
        </div>
    }
}