import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const Profile = (props, context) => (
    <div className={styles.profile}>
        <div className={styles.inner}>
            <div className={styles.topColumn}>
                <div className={styles.userImage}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${require("images/noPhoto.jpg")})`}}
                    />
                </div>
                <div className={styles.userInfoWrap}>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>test</div>
                        <Ionicon icon="ios-settings" fontSize="28px" color="black" />
                    </div>
                    <button className={styles.editBtn}>프로필 편집</button>
                </div>
            </div>
            <div className={styles.bottomColumn}>
                <div className={styles.userInfo}>
                    <div className={styles.countWrap}>
                        <span className={styles.title}>
                            게시물
                        </span>
                        <span className={styles.count}>
                            0
                        </span>
                    </div>
                    <div className={styles.countWrap}>
                        <span className={styles.title}>
                            팔로워
                        </span>
                        <span className={styles.count}>
                            0
                        </span>
                    </div>
                    <div className={styles.countWrap}>
                        <span className={styles.title}>
                            팔로우
                        </span>
                        <span className={styles.count}>
                            0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;