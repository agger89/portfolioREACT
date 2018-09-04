// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";

// actions creators
function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
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

// initial state
const initialState = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
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

// exports
const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount
};
export { actionCreators };

// reducer export
export default reducer;