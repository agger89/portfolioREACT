import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    static propTypes = {
        getFeed: PropTypes.func.isRequired
    };
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    // ajax처리 등을 넣는다
    componentDidMount() {
        const { getFeed } = this.props;
        getFeed();
    }
    render() {
        return <Feed {...this.state} />
    }
}

export default Container;