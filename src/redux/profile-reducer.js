import {profileAPI} from "../components/api/api";

const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SET_PROFILE = "SET_PROFILE";
const ADD_POST = "ADD-POST";
const GET_STATUS_COMPLETE = "GET_STATUS_COMPLETE";
const CHANGE_NEW_STATUS = "CHANGE_NEW_STATUS";

export const onPostChange = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const onStatusChange = (value) => ({type: CHANGE_NEW_STATUS, newValue: value});
export const addPost = () => ({type: ADD_POST});
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
        if (resultCode === 0) dispatch(getStatusComplete(status))
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
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.newValue,
            }
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
        case CHANGE_NEW_STATUS:
            return {
                ...state,
                status: action.newValue,
            }
        case ADD_POST:
            if (state.newPost) {
                const newPost = {
                    name: "Alexey Filippov",
                    message: state.newPost,
                    likesCount: 0,
                    id: state.postData.slice(-1)[0].id + 1,
                };
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPost: ""
                }
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer;