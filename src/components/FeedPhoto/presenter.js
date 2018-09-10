import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                {/* 데이터 작업하면 아래 문자열들 데이터로 불러오자 #3-50 */}
                <img
                    className={styles.image}
                    src={require("images/profilePhoto.jpg") || require("images/noPhoto.jpg")}
                    alt="Anthony"
                />
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>Anthony</span>
                    <span className={styles.location}>NewYork</span>
                </div>
            </header>
            <img
                src={require("images/newYork.jpg")}
                alt="newYork"
            />
            <div className={styles.meta}>
                <PhotoActions number={5} />
                <PhotoComments
                    message="nice picccc"
                    creator="James"
                />
                <TimeStamp time="1day ago"/>
                <CommentBox />
            </div>
        </div>
    );
};

// isRequired 반드시 전달되어야하는 프로퍼티라면
FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    created_at: PropTypes.string.isRequired
};

export default FeedPhoto;