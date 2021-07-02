const CHANGE_NEW_POST = "CHANGE-NEW-POST",
    GET_PROFILE = "GET_PROFILE",
    ADD_POST = "ADD-POST";

export const onPostChange = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const addPost = () => ({type: ADD_POST});
export const setProfile = (profile) => ({type: GET_PROFILE, profile});

const initState = {
    postData: [
        {name: "Alexey Filippov", message: "Hello World!", likesCount: 25, id: 0},
        {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20, id: 1}
    ],
    newPost: "",
    profile: null,
};
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.newValue,
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile,
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
            break;
        default:
            return state;
    }
}

export default profileReducer;