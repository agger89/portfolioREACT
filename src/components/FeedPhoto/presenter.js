import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";
import { Link } from "react-router-dom";

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${props.small_cover_image})` }}
                >
                    <Link to={`/profile/${props.id}`} params={{paramsId: props.id}} />
                </div>
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>{props.title}</span>
                    <span className={styles.location}>
                        {props.genres[0]}, {" "}
                        {props.genres.slice(-1)[0]}
                        </span>
                </div>
            </header>
            <img
                className={styles.feedImage}
                src={props.large_cover_image}
                alt={props.title}
            />
            <div className={styles.meta}>
                <PhotoActions
                    number={props.rating}
                    isLiked={props.is_liked}
                    photoId={props.id}
                    openLikes={props.openLikes}
                    focusInput={props.focusInput}
                />
                <PhotoComments
                    title={props.title}
                    genres={props.genres}
                />
                <TimeStamp time={props.year} />
                <CommentBox
                    photoId={props.id}
                    innerRef={props.innerRef}
                />
            </div>
            {props.seeingLikes && (
                <UserList title={context.t("Likes")} closeLikes={props.closeLikes} />
            )}
        </div>
    );
};

// 반드시 전달되어야하는 프로퍼티라면 isRequired

// 원본 FeedPhoto.propTypes
// FeedPhoto.propTypes = {
//     creator: PropTypes.shape({
//         profile_image: PropTypes.string,
//         username: PropTypes.string.isRequired
//     }).isRequired,
//     location: PropTypes.string.isRequired,
//     file: PropTypes.string.isRequired,
//     like_count: PropTypes.number.isRequired,
//     caption: PropTypes.string.isRequired,
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             message: PropTypes.string.isRequired,
//             creator: PropTypes.shape({
//                 profile_image: PropTypes.string,
//                 username: PropTypes.string.isRequired
//             }).isRequired
//         })
//     ).isRequired,
//     created_at: PropTypes.string.isRequired,
//     is_liked: PropTypes.bool.isRequired,
//     seeingLikes: PropTypes.bool.isRequired,
//     closeLikes: PropTypes.func.isRequired,
//     openLikes: PropTypes.func.isRequired,
//     likes: PropTypes.arrayOf(
//         PropTypes.shape({
//             profile_image: PropTypes.string,
//             username: PropTypes.string.isRequired,
//             name: PropTypes.string
//         }).isRequired
//     )
// };

FeedPhoto.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    small_cover_image: PropTypes.string,
    large_cover_image: PropTypes.string,
    year: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

FeedPhoto.contextTypes = {
    t: PropTypes.func.isRequired
};

export default FeedPhoto;