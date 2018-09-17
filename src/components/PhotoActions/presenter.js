import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
    <div className={styles.actions}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick={props.handleHeartClick}>
                {props.isLiked ?
                    (<Ionicon icon="ios-heart" fontSize="28px" color="#E84B59"/>)
                    :
                    (<Ionicon icon="ios-heart-outline" fontSize="28px" color="black"/>)
                }
            </span>
            <span className={styles.icon} onClick={props.focusInput}>
                <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
            </span>
        </div>
        <span className={styles.likes} onClick={props.openLikes}>
            {props.number} {" "}
            {/*{props.number === 1 ? context.t("like") : context.t("likes")}*/}
            {context.t("rating")}
        </span>
    </div>
);

PhotoActions.protoTypes = {
    number: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    photoId: PropTypes.number.isRequired,
    handleHeartClick: PropTypes.func.isRequired,
    handleFocusComment: PropTypes.func.isRequired,
    openLikes: PropTypes.func.isRequired,
    likePhoto: PropTypes.func.isRequired,
    focusInput: PropTypes.func.isRequired,
};

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
};

export default PhotoActions;