const CHANGE_NEW_POST = "CHANGE-NEW-POST",
    ADD_POST = "ADD-POST";

export const onPostChangeCreator = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const addPostCreator = () => ({type: ADD_POST});

const profileReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NEW_POST:
            state.newPost = action.newValue;
            return state;
        case ADD_POST:
            if (state.newPost) {
                const newPost = {
                    name: "Alexey Filippov",
                    message: state.newPost,
                    likesCount: 0,
                };
                state.postData.push(newPost);
                state.newPost = "";
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer;