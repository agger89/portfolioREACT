import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";
import FeedPhoto from "components/FeedPhoto";
import Ionicon from "react-ionicons";

const Explore = props => {
    if(props.loading) {
        return <LoadingExplore />
    } else if (props.feed) {
        return <RenderExplore {...props} />
    }
};

const LoadingExplore = props => (
    <div className={styles.explore}>
        <Loading />
    </div>
);

const RenderExplore = props => {
    return (
        <div className={styles.explore}>
            <div className={styles.userList}>
                {props.userList.map(user =>
                    user.rating === 8 &&
                    <UserDisplay big={true} user={user} key={user.id}/>
                )}
            </div>
            <div className={styles.userPhoto}>
                {props.feed.map((photo, i) =>
                    <PhotoDisplay
                        photo={photo}
                        openPhoto={props.openPhoto}
                        key={i}
                    />
                )}
            </div>
            {props.seeingPhoto && (
                <div className={styles.feedPhotoWrap}>
                    <span className={styles.icon} onClick={props.closePhoto}>
                        <Ionicon icon="md-close" fontSize="24px" color="white" />
                    </span>
                    <div className={styles.feedBack}>
                        {props.feed.map((photo, i) =>
                            photo.id == props.target &&
                            <FeedPhoto
                                modal={true}
                                genres={photo.genres}
                                small_cover_image={photo.small_cover_image}
                                large_cover_image={photo.large_cover_image}
                                title={photo.title}
                                id={photo.id}
                                rating={photo.rating}
                                is_liked={photo.is_liked}
                                openLikes={photo.openLikes}
                                focusInput={photo.focusInput}
                                year={photo.year}
                                key={i}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};

Explore.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.array
};

export default Explore;