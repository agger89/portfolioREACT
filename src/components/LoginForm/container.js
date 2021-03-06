import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: "",
        password: ""
    };
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired,
        clickLogin: PropTypes.func.isRequired
    };
    render() {
        const { username, password } = this.state;
        return (
            <LoginForm
                usernameValue={username}
                passwordValue={password}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin={this._handleFacebookLogin}
            />
        );
    }
    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
           [name]: value
        });
        console.log(value)
    };
    _handleSubmit = event => {
        event.preventDefault();
        // const { usernameLogin } = this.props;
        // const { username, password } = this.state;
        // usernameLogin(username, password);
        const { clickLogin } = this.props;
        clickLogin();
    };
    _handleFacebookLogin = response => {
        // const { facebookLogin } = this.props;
        // facebookLogin(response.accessToken);
        const { clickLogin } = this.props;
        clickLogin();
    }
}

export default Container;