import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
    <div className={styles.comments}>
        <ul className={styles.list}>
            {props.genres.map((comment, i) => (
                <Comment username={props.title} comment={comment} key={i}/>
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li className={styles.comment}>
        <span className={styles.username}>{props.username}</span>{" "}
        <span className={styles.message}>{props.comment}</span>
    </li>
);

// 원본 PhotoComments.propTypes
// PhotoComments.propTypes = {
//     creator: PropTypes.string.isRequired,
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             message: PropTypes.string.isRequired,
//             creator: PropTypes.shape({
//                 profile_image: PropTypes.string,
//                 username: PropTypes.string.isRequired
//             }).isRequired
//         })
//     ).isRequired
// };

PhotoComments.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

export default PhotoComments;