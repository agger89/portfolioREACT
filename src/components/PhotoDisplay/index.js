import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoDisplay = props => (
    <div className={styles.containerWrap}>
        <div className={styles.container}>
            <Link to={`/profile/${props.photo.id}`}>
                <div
                    className={styles.photo}
                    style={{ backgroundImage: `url(${props.photo.large_cover_image})` }}
                />
                <div className={styles.overlay}>
                  <span className={styles.data}>
                    <Ionicon icon="ios-heart" fontSize="22px" color="white" />{" "}
                      {props.photo.rating}
                  </span>
                        <span className={styles.data}>
                    <Ionicon icon="ios-text" fontSize="22px" color="white" />{" "}
                        {props.photo.genres.length}
                  </span>
                </div>
            </Link>
        </div>
    </div>
);

export default PhotoDisplay;