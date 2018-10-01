import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
    state = {
        loading: true
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
    // 컴포넌트가 prop 을 새로 받았을 때 실행된다
    // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용하다
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                loading: false
            })
        }
    };
    render() {
        const { userList } = this.props;
        const { feed } = this.props;
        return <Feed {...this.state} feed={feed} userList={userList}/>
    }
}

export default Container;