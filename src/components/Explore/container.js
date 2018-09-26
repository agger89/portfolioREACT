import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    static propTypes = {
        getExplore: PropTypes.func.isRequired,
        userList: PropTypes.array
    };
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    // ajax처리 등을 넣는다
    componentDidMount() {
        const { getExplore } = this.props;
        if (!this.props.userList) {
            getExplore();
        } else {
            this.setState({
                loading: false
            })
        }
    }
    // 컴포넌트가 prop 을 새로 받았을 때 실행된다
    // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용하다
    // componentWillReceiveProps = nextProps => {
    //     if (nextProps.userList) {
    //         this.setState({
    //             loading: false
    //         })
    //     }
    // };

    // 컴포넌트가 리렌더링을 마친 후 실행된다.
    // 위에 componentWillReceiveProps는 버전 16.3에 사라짐
    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.userList && this.props.userList) {
            this.setState({
                loading: false
            })
        }
    };

    render() {
        const { userList } = this.props;
        return <Explore {...this.state} userList={userList} />
    }
}

export default Container;