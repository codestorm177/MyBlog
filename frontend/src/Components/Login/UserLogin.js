import React from 'react'
import {Redirect} from 'react-router-dom';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            passcode: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }

    handleUpdate(e) {
        const type = e.target.name;
        const value = e.target.value;
        this.setState({
            [type]: value
        });
    }

    handleClick(e) {
        e.preventDefault();
        const user = this.state.user;
        const passcode = this.state.passcode;
        this.setState({user: '', passcode: ''})
        this.props.validateLogin(user, passcode);
    }

    registerClick() {
        const user = this.state.user;
        const passcode = this.state.passcode;
        this.setState({user: '', passcode: ''});

        this.props.registerLogin(user, passcode);
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/' />
        }
        return (
            <div className="user-login"id="login-div">
                <h2>LOG IN OR SIGN UP</h2>
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
                <button className="register-button" onClick={this.registerClick}>Register</button>
            </div>
        )
    }
}

export default UserLogin;