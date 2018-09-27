import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import FeedPhoto from "components/FeedPhoto";

const Feed = props => {
    if(props.loading) {
        return <LoadingFeed />
    } else if (props.feed) {
        return <RenderFeed {...props} />
    }
};

const LoadingFeed = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
);

const RenderFeed = props => (
    <div className={styles.feed}>
        {/* 원본 */}
        {/*{props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}*/}
        {props.feed.map((photo, i) => <FeedPhoto {...photo} key={i}/>)}
    </div>
);

Feed.propTypes = {
    loading: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired
};

export default Feed;