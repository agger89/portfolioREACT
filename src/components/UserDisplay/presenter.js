import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const UserDisplay = (props, context) => (
    <div
        className={`${props.horizontal ? styles.horizontal : styles.vertical} ${props.modal ? styles.modal : ""}`}
    >
        <div className={styles.wrap}>
            <div className={styles.column} onClick={props.closeStatus}>
                <Link to={`/profile/${props.user.id}`}>
                    <div
                        style={{ backgroundImage: `url(${props.user.medium_cover_image || require("images/noPhoto.jpg")})` }}
                        alt={props.user.title}
                        className={props.big ? styles.bigAvatar : styles.avatar}
                    />
                </Link>
                <Link to={`/profile/${props.user.id}`}>
                    <div className={styles.user}>
                        <span className={styles.username}>{props.user.title}</span>
                        <span className={styles.name}>{props.user.title}</span>
                    </div>
                </Link>
            </div>
            <span className={styles.column}>
                 <button className={styles.button} onClick={props.handleClick}>
                     {props.user.following ? context.t("Unfollow") : context.t("Follow")}
                 </button>
            </span>
        </div>
    </div>
);

UserDisplay.contextTypes = {
    t: PropTypes.func.isRequired
};

export default UserDisplay;