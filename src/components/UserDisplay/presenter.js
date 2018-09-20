import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserDisplay = (props, context) => (
    <div className={props.horizontal ? styles.horizontal : styles.vertical}>
        <div className={styles.wrap}>
            <div className={styles.column}>
                <div
                    style={{ backgroundImage: `url(${props.user.medium_cover_image || require("images/noPhoto.jpg")})` }}
                    alt={props.user.title}
                    className={props.big ? styles.bigAvatar : styles.avatar}
                />
                <div className={styles.user}>
                    <span className={styles.username}>{props.user.title}</span>
                    <span className={styles.name}>{props.user.title}</span>
                </div>
            </div>
            <span className={styles.column}>
                 <button className={styles.button} onClick={props.handleClick}>
                     {props.user.following ? context.t("Unfollow") : context.t("Follow")}
                 </button>`
            </span>
        </div>
    </div>
);

UserDisplay.contextTypes = {
    t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        name: PropTypes.string,
        following: PropTypes.bool.isRequired
    }).isRequired,
    big: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool
};

export default UserDisplay;