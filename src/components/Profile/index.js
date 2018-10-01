import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
    const { user : { userList }, routing: { location }, photos: { feed } } = state;
    return {
        userList,
        location,
        feed
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProfile: () => {
            dispatch(userAction.getProfile());
        },
        getFeed: () => {
            dispatch(photoActions.getFeed());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);