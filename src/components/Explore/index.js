import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { photos: { feed }, user: { userList } } = state;
    return {
        feed,
        userList
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        },
        getExplore: () => {
            dispatch(userActions.getExplore());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);