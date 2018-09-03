import React, { Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: "",
        fullname: "",
        username: "",
        password: ""
    };

    render() {
        const { email, fullname, username, password } = this.state;
        return (
            <SignupForm
                emailValue={email}
                fullnameValue={fullname}
                usernameValue={username}
                passwordValue={password}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
            />
        )
    }
    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            // name: <- 이렇게 했을시 state의 name 이라는 뜻이다.
            // [name]: <- 이렇게 작성하는 이유는 그냥 state 각 name 들을 전부 얘기하는것
            // 위처럼 하지 않았다면 하나하나 다 email, name, username 등등을 적어야 했을것
            [name]: value
        });
    }
    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
}


export default Container;