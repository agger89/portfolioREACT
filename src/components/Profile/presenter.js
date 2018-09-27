import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const Profile = props => {
    if(props.loading) {
        return <LoadingProfile />
    } else if (props.userList) {
        return <RenderProfile {...props} />
    }
};

const LoadingProfile = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
);

const RenderProfile = props => (
    <div className={styles.profile}>
        <div className={styles.inner}>
            {props.userList.map((user, i) =>
                user.id == props.location.pathname.slice(9) &&
                <HeaderProfile user={user} key={i} />
            )}
            <div className={styles.userPhoto}>
                {props.userList.map((photo, i) =>
                    <PhotoDisplay photo={photo} key={i}/>
                )}
            </div>
        </div>
    </div>
);

const HeaderProfile = (props, context) => (
    <Fragment>
        <div className={styles.topColumn}>
            <div className={styles.userImage}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${props.user.medium_cover_image || require("images/noPhoto.jpg")})`}}
                />
            </div>
            <div className={styles.userInfoWrap}>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{props.user.title}</div>
                    <Ionicon icon="ios-settings" fontSize="28px" color="black" />
                </div>
                <button className={styles.editBtn}>프로필 편집</button>
            </div>
        </div>
        <div className={styles.bottomColumn}>
            <div className={styles.userInfo}>
                <div className={styles.countWrap}>
                    <span className={styles.title}>개봉일</span>
                    <span className={styles.count}>{props.user.year}</span>
                </div>
                <div className={styles.countWrap}>
                    <span className={styles.title}>평점</span>
                    <span className={styles.count}>{props.user.rating}</span>
                </div>
                <div className={styles.countWrap}>
                    <span className={styles.title}>댓글</span>
                    <span className={styles.count}>{props.user.genres.length}</span>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Profile;