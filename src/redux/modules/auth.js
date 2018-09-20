// actions
const SET_ERROR = "SET_ERROR";

// actions creator
function setError() {
    return {
        type: SET_ERROR
    }
}

// initial state
const initialState = {
    error: false
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return applySetError(state, action);
        default:
            return state;
    }
}

// reducer functions
function applySetError(state, action) {
    return {
        error: true,
    }
}

// export
const actionCreators = {
    setError
};

export { actionCreators };

// reducer export
export default reducer;