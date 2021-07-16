import {profileAPI} from "../components/api/api";

const SET_PROFILE = "SET_PROFILE";
const ADD_POST = "ADD-POST";
const GET_STATUS_COMPLETE = "GET_STATUS_COMPLETE";

export const addPost = (value) => ({type: ADD_POST, value});
export const getProfileComplete = (profile) => ({type: SET_PROFILE, profile});
export const getStatusComplete = (status) => ({type: GET_STATUS_COMPLETE, status});

export const getProfile = userId => dispatch => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(getProfileComplete(data));
        });
};
export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(getStatusComplete(data));
        });
};

export const setStatus = (status) => dispatch => {
    profileAPI.setStatus(status).then(resultCode => {
        if (resultCode === 0) {
            dispatch(getStatusComplete(status))
        }
    });
};

const initState = {
    postData: [
        {name: "Alexey Filippov", message: "Hello World!", likesCount: 25, id: 0},
        {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20, id: 1}
    ],
    newPost: "",
    profile: null,
    status: "",
};
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case GET_STATUS_COMPLETE:
            return {
                ...state,
                status: action.status ? action.status : "",
            }
        case ADD_POST:
            const newPost = {
                name: "Alexey Filippov",
                message: action.value,
                likesCount: 0,
                id: state.postData.slice(-1)[0].id + 1,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        default:
            return state;
    }
}

export default profileReducer;