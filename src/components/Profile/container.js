import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";
import Explore from "../Explore/presenter";

class Container extends Component {
    state = {
        loading: true,
        seeingPhoto: false,
        target: ""
    };
    // static propTypes = {
    //     getProfile: PropTypes.func.isRequired,
    //     userList: PropTypes.array
    // };
    componentDidMount() {
        const { getFeed } = this.props;
        getFeed();
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
        const { feed } = this.props;
        return (
            <Profile
                {...this.state}
                userList={userList}
                location={location}
                feed={feed}
                openPhoto={this._openPhoto}
                closePhoto={this._closePhoto}
            />
        )
    }
    _openPhoto = (e) => {
        this.setState({
            seeingPhoto: true,
            target: e.target.id
        })
    };
    _closePhoto = () => {
        this.setState({
            seeingPhoto: false,
            target: ""
        })
    };
}

export default Container;