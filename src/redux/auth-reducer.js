import {authAPI, loginAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

export const setUserAuthData = (login, id, email, isAuth) => ({
    type: SET_USER_AUTH_DATA,
    data: {login, id, email, isAuth}
});

export const getUserAuthData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            const {login, id, email} = data.data;
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(login, id, email, true));
            }
        });
};

export const logOut = () => (dispatch) => {
    loginAPI.logOut()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false));
            }
        });
};

export const login = (email, password, rememberMe) => dispatch => {
    loginAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getUserAuthData());
        } else {
            dispatch(stopSubmit("login", {_error: data.messages.length > 0 ? data.messages[0]: "Some error"}))
        }
    });
}

const initState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;