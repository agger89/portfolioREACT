import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    // ajax처리 등을 넣는다
    componentDidMount() {
        const { getFeed } = this.props;
        if (!this.props.feed) {
            getFeed();
        } else {
            this.setState({
                loading: false
            })
        }
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                loading: false
            })
        }
    };
    render() {
        const { feed } = this.props;
        return <Feed {...this.state} feed={feed} />
    }
}

export default Container;