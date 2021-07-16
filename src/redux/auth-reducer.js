import {authAPI, loginAPI} from "../components/api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";
const TOGGLE_AUTH = "TOGGLE_AUTH";

export const setUserAuthData = (login, id, email) => ({type: SET_USER_AUTH_DATA, data: {login, id, email}});
export const toggleAuth = (isAuth) => ({type: TOGGLE_AUTH, isAuth});

export const getUserAuthData = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            const {login, id, email} = data.data;
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(login, id, email));
                dispatch(toggleAuth(true));
            }
        });
};
export const clearUserAuthData = () => (dispatch) => {
    loginAPI.logOut()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null));
                dispatch(toggleAuth(false));
            }
        });
};

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
        case TOGGLE_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default:
            return state;
    }
}

export default authReducer;