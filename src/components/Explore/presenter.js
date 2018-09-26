import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";

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
        <div className={styles.userList}>
            {props.userList.map(user =>
                user.rating === 8 &&
                <UserDisplay big={true} user={user} key={user.id} />
            )}
        </div>
        <div className={styles.userPhoto}>
            {props.userList.map(photo =>
                <PhotoDisplay photo={photo}/>
            )}
        </div>
    </div>
);

Explore.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.array
};

export default Explore;