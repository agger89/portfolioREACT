import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user: { userList } } = state;
    return {
        userList
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getExplore: () => {
            dispatch(userAction.getExplore());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);