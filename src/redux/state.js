let rerenderEntireTree = () => {
    console.log("state is changed...")
};

const state = {
    profilePage: {
        postData:  [
            {name: "Alexey Filippov", message: "Hello World!", likesCount: 25},
            {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20}
        ],

        newPost: "",

        changeNewPost: (newValue) => {
            state.profilePage.newPost = newValue;
            rerenderEntireTree();
        },

        addPost: () => {
            const newPost = {
                name: "Alexey Filippov",
                message: state.profilePage.newPost,
                likesCount: 0,
            };
            state.profilePage.postData.push(newPost);
            state.profilePage.newPost = "";
            rerenderEntireTree();
        },
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
        updateNewMessage: (messageText) => {
            state.messagesPage.newMessage = messageText;
            rerenderEntireTree();
        },
        sendMessage: () => {
            const newMessageData = {
                id: state.messagesPage.messageData.slice(-1)[0].id + 1,
                message: state.messagesPage.newMessage
            }
            state.messagesPage.messageData.push(newMessageData);
            state.messagesPage.newMessage = "";
            rerenderEntireTree();
        }
    },
    sidebar: {
        friendsList: [
            {id: 1, name:"Sergey Mironov", img: "https://lh3.googleusercontent.com/-j9tfOldlTfA/Vo4tzsMM_OI/AAAAAAAAAAA/f_7nWUAXRVAcqS0-SQsA1FvF0NppfzizQCOQCEAE/s50-p-k-rw-no/photo.jpg"},
            {id: 2, name: "Artem Stepanov", img: "https://lh3.googleusercontent.com/-JLEOBHteRZI/V6LZCqp2hJI/AAAAAAAAAAA/e-ENkAHMLhoQ0ybs0J4s-Q3YbzoM2Qb7wCOQCEAE/s80-p-k-rw-no/photo.jpg"},
        ],
    },
    subscribe: (observer) => {
        rerenderEntireTree = observer;
    }
};

export default state;