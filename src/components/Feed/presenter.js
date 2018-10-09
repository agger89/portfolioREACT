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
        {props.feed.map((photo, i) => <FeedPhoto {...photo} key={i}/>)}
    </div>
    /* scrollEvent */
    /*<div className={styles.feed} ref={props.myRef} style={{ height: "200px", overflow: "auto" }}>*/
        /*{props.feed.map((photo, i) => <FeedPhoto {...photo} key={i}/>)}*/
        /*{props.btmLoading ? <Loading /> : null}*/
    /*</div>*/
);

Feed.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Feed;