import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const Profile = props => {
    if(props.loading) {
        return <LoadingFeed />
    } else if (props.userList) {
        return <RenderProfile {...props} />
    }
};

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
);

const RenderProfile = (props, context) => (
    <div className={styles.profile}>
        {props.userList.map(user =>
            user.id == props.location.pathname.slice(9) &&
        <div className={styles.inner}>
            <div className={styles.topColumn}>
                <div className={styles.userImage}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${user.medium_cover_image || require("images/noPhoto.jpg")})`}}
                    />
                </div>
                <div className={styles.userInfoWrap}>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{user.title}</div>
                        <Ionicon icon="ios-settings" fontSize="28px" color="black" />
                    </div>
                    <button className={styles.editBtn}>프로필 편집</button>
                </div>
            </div>
            <div className={styles.bottomColumn}>
                <div className={styles.userInfo}>
                    <div className={styles.countWrap}>
                    <span className={styles.title}>
                        개봉일
                    </span>
                    <span className={styles.count}>
                        {user.year}
                    </span>
                    </div>
                    <div className={styles.countWrap}>
                    <span className={styles.title}>
                        평점
                    </span>
                    <span className={styles.count}>
                        {user.rating}
                    </span>
                    </div>
                    <div className={styles.countWrap}>
                    <span className={styles.title}>
                        댓글
                    </span>
                    <span className={styles.count}>
                        {user.genres.length}
                    </span>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
);

export default Profile;