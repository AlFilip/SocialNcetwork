import {getUserAuthData} from "./auth-reducer";

const SET_INIT_SUCCESS = "SET_INIT_SUCCESS";

export const setInitSuccess = (isInit) => ({type: SET_INIT_SUCCESS, isInit});

export const setInitApp = () => dispatch => {
    const promise = dispatch(getUserAuthData());
    Promise.all([promise]).then(() => dispatch(setInitSuccess(true)));
};

const initState = {
    isInit: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INIT_SUCCESS:
            return {
                ...state,
                isInit: action.isInit,
            }
        default:
            return state;
    }
}

export default appReducer;