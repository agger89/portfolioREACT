import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList }, routing: { location } } = state;
    return {
        userList,
        imageList,
        location
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { searchTerm } } } = ownProps;
    return {
        searchByTerm: () => {
            console.log(searchTerm);
            dispatch(userActions.searchByTerm(searchTerm));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);