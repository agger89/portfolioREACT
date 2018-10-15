import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    static propTypes = {
        searchByTerm: PropTypes.func.isRequired,
        userList: PropTypes.array,
        imageList: PropTypes.array
    };
    componentDidMount() {
        const { searchByTerm } = this.props;
        searchByTerm();
    }
    componentDidUpdate(prevProps, prevState) {
        const { searchByTerm, pathname } = this.props;
        if (prevProps.match.params !== this.props.match.params) {
            searchByTerm();
        }
        if (prevProps.userList && this.props.imageList) {
            this.setState({
                loading: false
            });
        }
        if (prevProps.pathname !== pathname) {
            searchByTerm();
        }
    }

    render() {
        const { userList, imageList } = this.props;
        return (
            <Explore {...this.state} userList={userList} imageList={imageList} />
        );
    }
}

export default Container;