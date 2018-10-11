import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoDisplay = props => (
    <div className={styles.containerWrap}>
        <div className={styles.container}>
            <div
                className={`${styles.photo} ${props.large_cover_image ? styles.noImage : ""}`}
                style={{ backgroundImage: `url(${props.photo.large_cover_image || require("images/no-img.png")})` }}
            />
            <div className={styles.overlay} onClick={props.openPhoto} id={props.photo.id}>
                <span className={styles.data}>
                    <Ionicon icon="ios-heart" fontSize="22px" color="white" />
                    {props.photo.rating}
                </span>
                <span className={styles.data}>
                    <Ionicon icon="ios-text" fontSize="22px" color="white" />
                    {props.photo.genres.length}
                </span>
            </div>
        </div>
    </div>
);

export default PhotoDisplay;