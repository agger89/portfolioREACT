import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const Explore = props => {
    if(props.loading) {
        return <LoadingExplore />
    } else if (props.userList) {
        return <RenderExplore {...props} />
    }
};

const LoadingExplore = props => (
    <div className={styles.explore}>
        <Loading />
    </div>
);

const RenderExplore = props => (
    <div className={styles.explore}>
        {/* 데이터없어서 map 함수 에러 */}
        {/*{props.userList.map(user => <UserRow big={true} user={user} key={user.id} />)}*/}
        {/* 임시로 대체 */}
        <UserDisplay />
    </div>
);

Explore.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.array
};

export default Explore;