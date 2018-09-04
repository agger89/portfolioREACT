import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    };
    // 클래스형태의 컴포넌트 일때는 static 을 붙여서 propTypes 를 지정
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired,
        clickLogin: PropTypes.func.isRequired
    };
    render() {
        const { email, name, username, password } = this.state;
        return (
            <SignupForm
                emailValue={email}
                nameValue={name}
                usernameValue={username}
                passwordValue={password}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin={this._handleFacebookLogin}
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
    };
    _handleSubmit = event => {
        // event.preventDefault();
        // const { email, name, password, username } = this.state;
        // const { createAccount } = this.props;
        // createAccount(username, password, email, name);
        const { clickLogin } = this.props;
        clickLogin();
    };
    _handleFacebookLogin = response => {
        // const { facebookLogin } = this.props;
        // facebookLogin(response.accessToken);
        const { clickLogin } = this.props;
        clickLogin();
    };
}

export default Container;