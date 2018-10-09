// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";
const SET_PROFILE = "SET_PROFILE";

// actions creators
function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

function login() {
    return {
        type: LOGIN,
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

function setUserList(userList) {
    return {
        type: SET_USER_LIST,
        userList
    }
}

function setFollowUser(userId) {
    return {
        type: FOLLOW_USER,
        userId
    }
}

function setUnfollowUser(userId) {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

function setImageList(userList) {
    return {
        type: SET_IMAGE_LIST,
        userList
    }
}

function setProfile(userList) {
    return {
        type: SET_PROFILE,
        userList
    }
}

// API actions
// 백엔드 작업이 안되어있음, facebook로그인 버튼을 클릭하면 post할 url이 없다고 뜸
// 프론트 작업만 완료
function facebookLogin(access_token) {
    return function(dispatch) {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    dispatch(saveToken(json.token))
                }
            })
            .catch(err => console.log(err))
    }
}
// 백엔드 작업이 안되어있음, 로그인 버튼을 클릭하면 post할 url이 없다고 뜸
// 프론트 작업만 완료
function usernameLogin(username, password) {
    return function(dispatch) {
        fetch("/rest-auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    dispatch(saveToken(json.token))
                }
            })
            .catch(err => console.log(err))
    }
}

function createAccount(username, password, email, name) {
    return function(dispatch) {
        fetch("/rest-auth/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email,
                name
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    dispatch(saveToken(json.token))
                }
            })
            .catch(err => console.log(err))
    }
}

// 원본 getPhotoLikes
// function getPhotoLikes(photoId) {
//     return (dispatch, getState) => {
//         const { user: { token } } = getState();
//         fetch(`/images/${photoId}/likes/`, {
//             headers: {
//                 Autorization: `JWT ${token}`
//             }
//         })
//             .then(response => {
//                 if (response.status === 401) {
//                     dispatch(logout());
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 dispatch(setUserList(json))
//             })
//     }
// }

function getPhotoLikes(photoId) {
    return (dispatch, getState) => {
        fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => dispatch(setUserList(json.data.movies)))
            .catch(err => console.log(err))
    };
}

// 원본 followUser
// function followUser(userId) {
//     return (dispatch, getState) => {
//         dispatch(setFollowUser(userId));
//         const { user: { token } } = getState();
//         fetch(`/users/${userId}/follow/`, {
//             method: "POST",
//             headers: {
//                 Authorization: `JWT ${token}`,
//                 "Content-Type": "application/json"
//             }
//         }).then(response => {
//             if (response.status === 401) {
//                 dispatch(logout());
//             } else if (!response.ok) {
//                 dispatch(setUnfollowUser(userId));
//             }
//         });
//     };
// }

function followUser(userId) {
    return (dispatch, getState) => {
        dispatch(setFollowUser(userId));
    };
}

// 원본 unfollowUser
// function unfollowUser(userId) {
//     return (dispatch, getState) => {
//         dispatch(setUnfollowUser(userId));
//         const { user: { token } } = getState();
//         fetch(`/users/${userId}/unfollow/`, {
//             method: "POST",
//             headers: {
//                 Authorization: `JWT ${token}`,
//                 "Content-Type": "application/json"
//             }
//         }).then(response => {
//             if (response.status === 401) {
//                 dispatch(logout());
//             } else if (!response.ok) {
//                 dispatch(setFollowUser(userId));
//             }
//         });
//     };
// }

function unfollowUser(userId) {
    return (dispatch, getState) => {
        dispatch(setUnfollowUser(userId));
    };
}

// 원본 getExplore
// function getExplore() {
//     return (dispatch, getState) => {
//         const { user: { token } } = getState();
//         fetch(`/users/explore/`, {
//             method: "GET",
//             headers: {
//                 Authorization: `JWT ${token}`,
//             }
//         })
//             .then(response => {
//                 if (response.status === 401) {
//                     dispatch(logout());
//                 }
//                 return response.json();
//             })
//             .then(json => dispatch(setUserList(json)));
//     };
// }

function getExplore() {
    return (dispatch, getState) => {
        fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => dispatch(setUserList(json.data.movies)))
            .catch(err => console.log(err))
    };
}

function getProfile() {
    return (dispatch, getState) => {
        fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => dispatch(setProfile(json.data.movies)))
            .catch(err => console.log(err))
    };
}

// 원본 searcgByTerm
// function searchByTerm(searchTerm) {
//     return async(dispatch, getState) => {
//         const { user: { token } } = getState();
//         const userList = await searchUsers(token, searchTerm);
//         const imageList = await searchImages(token, searchTerm);
//         if (userList === 401 || imageList === 401) {
//             dispatch(logout());
//         }
//         dispatch(setUserList(userList));
//         dispatch(setImageList(imageList));
//     }
// }

function searchByTerm(searchTerm) {
    return async(dispatch, getState) => {
        const userList = await searchUsers(searchTerm);
        const imageList = await searchImages(searchTerm);
        dispatch(setUserList(userList));
        dispatch(setImageList(imageList));
    }
}

// 원본 searchUsers
// function searchUsers(token, searchTerm) {
//     return fetch(`/users/search/?username=${searchTerm}`, {
//         headers: {
//             Authorization: `JWT ${token}`
//         }
//     })
//         .then(response => {
//             if (response.status === 401) {
//                 return 401;
//             }
//             return response.json();
//         })
//         .then(json => json);
// }

function searchUsers(searchTerm) {
    return fetch(`https://yts.am/api/v2/list_movies.json?movie_title=${searchTerm}`)
    .then(json => json);
}

// 원본 searchImages
// function searchImages(token, searchTerm) {
//     return fetch(`/images/search/?hashtags=${searchTerm}`, {
//         headers: {
//             Authorization: `JWT ${token}`
//         }
//     })
//         .then(response => {
//             if (response.status === 401) {
//                 return 401;
//             }
//             return response.json();
//         })
//         .then(json => json);
// }

function searchImages(token, searchTerm) {
    return fetch(`https://yts.am/api/v2/list_movies.json?movie_title=${searchTerm}`)
        .then(json => json);
}

function clickLogin() {
    return function (dispatch) {
        dispatch(login())
    }
}

// initial state
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt")
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGIN:
            return applyLogin(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        case SET_USER_LIST:
            return applySetUserList(state, action);
        case FOLLOW_USER:
            return applyFollowUser(state, action);
        case UNFOLLOW_USER:
            return applyUnfollowUser(state, action);
        case SET_IMAGE_LIST:
            return applySetImageList(state, action);
        case SET_PROFILE:
            return applySetProfile(state, action);
        default:
            return state;
    }
}

// reducer functions
function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem('jwt', token);
    return {
        ...state,
        isLoggedIn: true,
        token
    }
}

function applyLogin(state, action) {
    return {
        isLoggedIn: true,
    }
}

function applyLogout(state, action) {
    localStorage.setItem("jwt");
    return {
        isLoggedIn: false
    }
}

function applySetUserList(state, action) {
    const { userList } = action;
    return {
        ...state,
        userList
    }
}

function applyFollowUser(state, action) {
    const { userId } = action;
    const { userList } = state;
    const updateUserList = userList.map(user => {
        if(user.id === userId) {
            return {...user, following: true}
        }
        return user;
    });
    return {...state, userList: updateUserList}
}

function applyUnfollowUser(state, action) {
    const { userId } = action;
    const { userList } = state;
    const updateUserList = userList.map(user => {
        if(user.id === userId) {
            return {...user, following: false}
        }
        return user;
    });
    return {...state, userList: updateUserList}
}

function applySetImageList(state, action) {
    const { imageList } = action;
    return {
        ...state,
        imageList
    }
}

function applySetProfile(state, action) {
    const { userList } = action;
    return {
        ...state,
        userList
    }
}

// exports
const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    clickLogin,
    logout,
    getPhotoLikes,
    followUser,
    unfollowUser,
    getExplore,
    searchByTerm,
    getProfile
};
export { actionCreators };

// reducer export
export default reducer;