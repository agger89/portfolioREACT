import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    // static propTypes = {
    //     getProfile: PropTypes.func.isRequired,
    //     userList: PropTypes.array
    // };
    componentDidMount() {
        const { getProfile } = this.props;
        if (!this.props.userList) {
            getProfile();
        } else {
            this.setState({
                loading: false
            })
        }
    };
    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.userList && this.props.userList) {
            this.setState({
                loading: false
            })
        }
    };

    render () {
        const { userList } = this.props;
        const { location } = this.props;
        console.log("payloadddddd ", location.pathname.slice(9));
        return <Profile {...this.state} userList={userList} location={location}/>
    }
}

export default Container;