// imports
import { actionCreators as userActions } from "redux/modules/user";

// actions
const SET_FEED = "SET_FEED";
const SET_FEED_MORE = "SET_FEED_MORE";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";

// action creators
function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    }
}
function setFeedMore(feed) {
    return {
        type: SET_FEED,
        feed
    }
}

function doLikePhoto(photoId) {
    return {
        type: LIKE_PHOTO,
        photoId
    }
}

function doUnlikePhoto(photoId) {
    return {
        type: UNLIKE_PHOTO,
        photoId
    }
}

function addComment(photoId, comment) {
    return {
        type: ADD_COMMENT,
        photoId,
        comment
    }
}


// api actions
// 원본 getFeed
// function getFeed() {
//     return (dispatch, getState) => {
//         const { user: { token } } = getState();
//         fetch("/images/", {
//             headers: {
//                 Authorization: `JWT ${token}`
//             }
//         })
//         .then(response => {
//             if (response.status === 401) {
//                 dispatch(userActions.logout());
//             }
//             return response.json.toString();
//         })
//         .then(json => dispatch(setFeed(json)))
//         .catch(err => console.log(err))
//     };
// }
function getFeed() {
    return (dispatch, getState) => {
        fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => dispatch(setFeed(json.data.movies)))
            .catch(err => console.log(err))
    };
}

// scroll
// function getFeedMore() {
//     return (dispatch, getState) => {
//         fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count&limit=3")
//             .then(response => response.json())
//             .then(json => dispatch(setFeedMore(json.data.movies)))
//             .catch(err => console.log(err))
//     };
// }

// 원본 likePhoto
// function likePhoto(photoId) {
//     return (dispatch, getState) => {
//         dispatch(doLikePhoto(photoId));
//         const { user: { token } } = getState();
//         fetch(`/images/${photoId}/likes/`, {
//             method: "POST",
//             headers: {
//                 Authorization: `JWT ${token}`
//             }
//         }).then(response => {
//             if (response.status === 401) {
//                 dispatch(userActions.logout());
//             } else if (!response.ok) {
//                 dispatch(doUnlikePhoto(photoId));
//             }
//         })
//     }
// }
function likePhoto(photoId) {
    return (dispatch) => {
        dispatch(doLikePhoto(photoId));
    }
}

// 원본 likePhoto
// function unlikePhoto(photoId) {
//     return (dispatch, getState) => {
//         dispatch(doUnlikePhoto(photoId));
//         const { user: { token } } = getState();
//         fetch(`/images/${photoId}/unlikes/`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: `JWT ${token}`
//             }
//         }).then(response => {
//             if (response.status === 401) {
//                 dispatch(userActions.logout());
//             } else if (!response.ok) {
//                 dispatch(doLikePhoto(photoId));
//             }
//         })
//     }
// }
function unlikePhoto(photoId) {
    return (dispatch) => {
        dispatch(doUnlikePhoto(photoId));
    }
}
// 원본 commentPhoto
// function commentPhoto(photoId, message) {
//     return (dispatch, getState) => {
//         const { user: { token } } = getState();
//         fetch(`/images/${photoId}/comments/`, {
//             method: "POST",
//             headers: {
//                 Authorization: `JWT ${token}`,
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message
//             })
//         }).then(response => {
//             if (response.status === 401) {
//                 dispatch(userActions.logout());
//             }
//             return response.json()
//         }).then(json => {
//             if(json.message) {
//                 dispatch(addComment(photoId, json));
//             }
//         });
//     };
// }
function commentPhoto(photoId, message) {
    return (dispatch, getState) => {
        dispatch(addComment(photoId, message));
    };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_FEED_MORE:
            return applySetFeed(state, action);
        case LIKE_PHOTO:
            return applyLikePhoto(state, action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state, action);
        case ADD_COMMENT:
            return applyAddComment(state, action);
        default:
            return state;
    }
}

// reducer function
function applySetFeed(state, action) {
    const { feed } = action;
    return {
         ...state,
         feed
    }
}

function applyLikePhoto(state, action) {
    const { photoId } = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return { ...photo, is_liked: true, rating: photo.rating + 1}
        }
        return photo;
    });
    return { ...state, feed: updateFeed };
}

function applyUnlikePhoto(state, action) {
    const { photoId } = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return { ...photo, is_liked: false, rating: photo.rating - 1}
        }
        return photo;
    });
    return { ...state, feed: updateFeed };
}

// 원본 applyAddCooment
// function applyAddComment(state, action) {
//     const { photoId, comment } = action;
//     const { feed } = state;
//     const updateFeed = feed.map(photo => {
//         if (photo.id === photoId) {
//             return {
//                  ...photo,
//                  comments: [...photo.comments, comment]
//              };
//         }
//         return photo;
//     });
//     return { ...state, feed: updateFeed };
// }
function applyAddComment(state, action) {
    const { photoId, comment } = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return {
                 ...photo,
                 genres: [ ...photo.genres, comment ]
            };
        }
        return photo;
    });
    return { ...state, feed: updateFeed };
}

// exports
const actionCreators = {
    getFeed,
    likePhoto,
    unlikePhoto,
    commentPhoto,
    // scroll
    // getFeedMore
};

export { actionCreators };

// default reducer export
export default reducer;