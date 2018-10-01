import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
    state = {
        loading: true,
        seeingPhoto: false,
        target: ""
    };
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    // ajax처리 등을 넣는다
    componentDidMount() {
        const { getExplore } = this.props;
        getExplore();
        const { getFeed } = this.props;
        if (!this.props.feed) {
            getFeed();
        } else {
            this.setState({
                loading: false
            })
        }
    }

    // 컴포넌트가 리렌더링을 마친 후 실행된다.
    // 원래 componentWillReceiveProps를 사용했지만 버전 16.3 에서 사라짐
    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.feed && this.props.feed) {
            this.setState({
                loading: false
            })
        }
    };

    render() {
        const { feed } = this.props;
        const { userList } = this.props;
        return (
            <Explore
                {...this.state}
                feed={feed}
                userList={userList}
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