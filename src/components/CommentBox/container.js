import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
    state = {
        comment: ""
    };
    render() {
        return (
            <CommentBox
                {...this.state}
                {...this.props}
                handleInputChange={this._handleInputChange}
                handleKeyPress={this._handleKeyPress}
            />
        );
    }
    // 이벤트 함수앞에 _ 이유는 컴포넌트 내부에 만든 함수다 라고 명시해주는 컨벤션
    _handleInputChange = event => {
        const { target: { value } } = event;
        this.setState({
            comment: value
        });

    };
    _handleKeyPress = event => {
        const { submitComment } = this.props;
        const { comment } = this.state;
        const { key } = event;
        if (key === "Enter") {
            event.preventDefault();
            submitComment(comment);
            this.setState({
                comment: ""
            })
        }
    }
}

export default Container;