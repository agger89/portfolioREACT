import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
    state = {
        term: "",
        seeingStatus: false,
        loading: true,
        navTop: false
    };
    static propTypes = {
        goToSearch: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.userList && this.props.userList) {
            this.setState({
                loading: false
            })
        }
        // navScroll
        if (prevState.loading && !this.state.loading) {
            window.addEventListener("scroll", () => {
                console.log(window.scrollY);
                console.log(this.div.clientHeight);
                if (window.scrollY >= this.div.clientHeight) {
                    this.setState({
                        navTop: true
                    })
                } else {
                    this.setState({
                        navTop: false
                    })
                }
            });
        }

        // document.body.addEventListener("click", () => {
        //     this.setState({
        //         seeingStatus: false
        //     })
        // });
    }

    render() {
        const { userList } = this.props;
        return (
        <Navigation
            {...this.state}
            userList={userList}
            onSubmit={this._onSubmit}
            onInputChange={this._onInputChange}
            openStatus={this._openStatus}
            closeStatus={this._closeStatus}
            value={this.state.term}
            navRef={ref => this.div = ref}
        />
        )
    }
    _onInputChange = event => {
        const { target: { value } } = event;
        this.setState({
            term: value
        });
    };
    _onSubmit = event => {
        const { goToSearch } = this.props;
        const { term } = this.state;
        event.preventDefault();
        goToSearch(term);
        this.setState({
            term: ""
        });
    };
    _openStatus = () => {
        this.setState({
            seeingStatus: true,
        });
        const { getPhotoLikes } = this.props;
        if (!this.props.userList) {
            getPhotoLikes();
        } else {
            this.setState({
                loading: false
            })
        }
    };
    _closeStatus = () => {
        console.log(1)
        this.setState({
            seeingStatus: false,
        });
    };

}

export default Container;