const CHANGE_NEW_POST = "CHANGE-NEW-POST",
    ADD_POST = "ADD-POST",
    SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const store = {
    rerenderEntireTree() {
        console.log("state is changed...")
    },
    _state: {
        profilePage: {
            postData: [
                {name: "Alexey Filippov", message: "Hello World!", likesCount: 25},
                {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20}
            ],
            newPost: "",
        },
        messagesPage: {
            dialogData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Artem"}
            ],
            messageData: [
                {id: 1, message: "Hi man"},
                {id: 2, message: "How you doing?"},
            ],
            newMessage: "",
        },
        sidebar: {
            friendsList: [
                {
                    id: 1,
                    name: "Sergey Mironov",
                    img: "https://lh3.googleusercontent.com/-j9tfOldlTfA/Vo4tzsMM_OI/AAAAAAAAAAA/f_7nWUAXRVAcqS0-SQsA1FvF0NppfzizQCOQCEAE/s50-p-k-rw-no/photo.jpg"
                },
                {
                    id: 2,
                    name: "Artem Stepanov",
                    img: "https://lh3.googleusercontent.com/-JLEOBHteRZI/V6LZCqp2hJI/AAAAAAAAAAA/e-ENkAHMLhoQ0ybs0J4s-Q3YbzoM2Qb7wCOQCEAE/s80-p-k-rw-no/photo.jpg"
                },
            ],
        },
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        const type = action.type;
        if (type === CHANGE_NEW_POST) {
            this._state.profilePage.newPost = action.newValue;
            this.rerenderEntireTree();
        } else if (type === ADD_POST) {
            const newPost = {
                name: "Alexey Filippov",
                message: this._state.profilePage.newPost,
                likesCount: 0,
            };
            this._state.profilePage.postData.push(newPost);
            debugger;
            this._state.profilePage.newPost = "";
            this.rerenderEntireTree();
        } else if (type === SEND_MESSAGE) {
            const newMessageData = {
                id: this._state.messagesPage.messageData.slice(-1)[0].id + 1,
                message: this._state.messagesPage.newMessage
            }
            this._state.messagesPage.messageData.push(newMessageData);
            this._state.messagesPage.newMessage = "";
            this.rerenderEntireTree();
        } else if (type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessage = action.value;
            this.rerenderEntireTree();
        } else console.log(action);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
};

export const onPostChangeActionCreator = (value) => ({type: CHANGE_NEW_POST, newValue: value});
export const addPostActionCreator = () => ({type: ADD_POST});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageActionCreator = (value) => ({type: UPDATE_NEW_MESSAGE, value: value})

export default store;