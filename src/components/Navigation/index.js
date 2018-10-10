import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux"
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user: { userList } } = state;
    return {
        userList
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToSearch: searchTerm => {
            dispatch(push(`/search/${searchTerm}`));
        },
        getPhotoLikes: () => {
            dispatch(userActions.getPhotoLikes());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);