import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
    <div>
        <ul>
            <Comment username={props.creator} comments={props.message} />
            {/* 데이터 작업하면 map 으로 #3-51 */}
        </ul>
    </div>
);

const Comment = props => (
    <li>
        <span>{props.username}</span>
        <span>{props.comments}</span>
    </li>
);

PhotoComments.propTypes = {
    caption: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};

export default PhotoComments;