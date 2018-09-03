// imports

// actions

// actions creators

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
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }
}

// initial state
const initialState = {
    isLoggedIn: localStorage.getItem('jwt') || false
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// reducer functions

// exports
const actionCreators = {
    facebookLogin
};
export { actionCreators };

// reducer export
export default reducer;