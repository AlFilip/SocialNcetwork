
const store = {
    rerenderEntireTree()  {
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
        switch (type) {
            case "CHANGE-NEW-POST":
                this._state.profilePage.newPost = action.newValue;
                this.rerenderEntireTree();
                break;
            case "ADD-POST":
                const newPost = {
                    name: "Alexey Filippov",
                    message: this.getState().profilePage.newPost,
                    likesCount: 0,
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPost = "";
                this.rerenderEntireTree();
                break;
            case "SEND-MESSAGE":
                const newMessageData = {
                    id: this._state.messagesPage.messageData.slice(-1)[0].id + 1,
                    message: this._state.messagesPage.newMessage
                }
                this._state.messagesPage.messageData.push(newMessageData);
                this._state.messagesPage.newMessage = "";
                this.rerenderEntireTree();
                break;
            case "UPDATE-NEW-MESSAGE":
                this._state.messagesPage.newMessage = action.messageText;
                this.rerenderEntireTree();
                break;
            default:
                console.log("dispatch error");
                break;
        }
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
};

export default store;