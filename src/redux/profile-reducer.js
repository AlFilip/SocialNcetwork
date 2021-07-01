const CHANGE_NEW_POST = "CHANGE-NEW-POST",
    ADD_POST = "ADD-POST";

export const onPostChange = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const addPost = () => ({type: ADD_POST});

const initState = {
        postData: [
            {name: "Alexey Filippov", message: "Hello World!", likesCount: 25, id:0},
            {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20, id:1}
        ],
        newPost: "",
};
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.newValue,
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
            } break;
        default:
            return state;
    }
}

export default profileReducer;