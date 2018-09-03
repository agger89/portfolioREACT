import React from "react";
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                className={formStyles.textInput}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder="Password"
                className={formStyles.textInput}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Log In"
                className={formStyles.button}
            />
        </form>
        <span className={formStyles.divider}>or</span>
        {/*
            페이스북 로그인
            1. https://developers.facebook.com/apps 가서 새 앱 추가
            1. 앱 도메인 입력란에 localhost 등 url 추가 후 변경 내용 저장
            1. 앱ID 복사해서 appId="여기에 붙여넣기"
        */}
        <FacebookLogin
            appId="455772218254805"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook"
            textButton="Log in with Facebook"
        />
        <span className={formStyles.forgotLink}>Forgot password?</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};


export default LoginForm;