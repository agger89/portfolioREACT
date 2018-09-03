import { connect } from 'react-redux';
import Container from './container';
// as userActions은 actionCreators의 별명을 지어준건
// 나중에 모듈을 생성할때 중복되지 않도록
import { actionCreators  as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: access_token => {
            dispatch(userActions.facebookLogin(access_token));
        },
        usernameLogin: (email, password) => {
            dispatch(userActions.usernameLogin(email, password));
        }
    }
};

export default connect(null, mapDispatchToProps)(Container);