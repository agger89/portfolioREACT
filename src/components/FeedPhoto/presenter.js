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
        <div className={`${styles.feedPhoto} ${props.modal ? styles.modal : null}`}>
            <header className={styles.header}>
                <Link to={`/profile/${props.id}`}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${props.small_cover_image  || require("images/noPhoto.jpg")})` }}
                    />
                    <div className={styles.headerColumn}>
                        <span className={styles.creator}>{props.title}</span>
                        <span className={styles.location}>
                            {props.genres[0]}, {" "}
                            {props.genres[1]}
                            </span>
                    </div>
                </Link>
            </header>
            <div className={styles.imageWrap}>
                <img
                    className={props.large_cover_image ? styles.feedImage : styles.noImage}
                    src={props.large_cover_image ? props.large_cover_image : require("images/no-img.png")}
                    alt={props.title}
                />
            </div>
            <div className={`${styles.meta} ${props.seeingLikes ? styles.likes : null}`}>
                <div className={styles.photoActions}>
                    <PhotoActions
                        rating={props.rating}
                        isLiked={props.is_liked}
                        photoId={props.id}
                        openLikes={props.openLikes}
                        focusInput={props.focusInput}
                    />
                </div>
                <div className={styles.comments}>
                    <PhotoComments
                        title={props.title}
                        genres={props.genres}
                    />
                </div>
                <div className={styles.commentBox}>
                    <TimeStamp time={props.year} />
                    <CommentBox
                        photoId={props.id}
                        innerRef={props.innerRef}
                    />
                </div>
            </div>
            {props.seeingLikes && (
                <UserList title={context.t("Rating")} closeLikes={props.closeLikes} modal={props.modal}/>
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
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

FeedPhoto.contextTypes = {
    t: PropTypes.func.isRequired
};

export default FeedPhoto;