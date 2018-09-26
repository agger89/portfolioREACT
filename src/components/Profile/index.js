import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user : { userList }, routing: { location } } = state;
    return {
        userList,
        location
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProfile: () => {
            dispatch(userAction.getProfile());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);