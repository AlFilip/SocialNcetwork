const CHANGE_NEW_POST = "CHANGE-NEW-POST",
    ADD_POST = "ADD-POST";

export const onPostChangeCreator = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const addPostCreator = () => ({type: ADD_POST});

const initState = {
        postData: [
            {name: "Alexey Filippov", message: "Hello World!", likesCount: 25},
            {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20}
        ],
        newPost: ""
};
const profileReducer = (state = initState, action) => {
    const stateCopy = {...state};
    switch (action.type) {
        case CHANGE_NEW_POST:
            stateCopy.newPost = action.newValue;
            return stateCopy;
        case ADD_POST:
            if (stateCopy.newPost) {
                const newPost = {
                    name: "Alexey Filippov",
                    message: stateCopy.newPost,
                    likesCount: 0,
                };
                stateCopy.postData = [...state.postData];
                stateCopy.postData.push(newPost);
                stateCopy.newPost = "";
            }
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default profileReducer;