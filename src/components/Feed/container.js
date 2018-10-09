import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
    state = {
        loading: true,
        btmLoading: true,
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
    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.feed && this.props.feed) {
            this.setState({
                loading: false
            })
        }
        // scrollEvent
        // if (prevState.loading && !this.state.loading) {
        //     this.div.addEventListener("scroll", () => {
        //         if (
        //             this.div.scrollTop + this.div.clientHeight >=
        //             this.div.scrollHeight
        //         ) {
        //             this._loadMoreItems();
        //             console.log(1)
        //         }
        //     });
        // }
    }

    render() {
        const { userList } = this.props;
        const { feed } = this.props;
        return (
            <Feed
                {...this.state}
                feed={feed}
                userList={userList}
                // scrollEvent
                // myRef={ref => this.div = ref}
                // loadMoreItems={this._loadMoreItems}
            />
        )
    }

    // scrollEvent
    // _loadMoreItems() {
    //     this.setState({ btmLoading: true });
    //     const { getFeedMore } = this.props;
    //     setTimeout(() => {
    //         getFeedMore();
    //         this.setState({ feed: this.state.feed + 5 , btmLoading: false});
    //     }, 3000);
    // }
}

export default Container;