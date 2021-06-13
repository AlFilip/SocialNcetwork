const SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageCreator = (value) => ({type: UPDATE_NEW_MESSAGE, value: value});

const initState = {
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
}

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessage) {
                const newMessageData = {
                    id: state.messageData.slice(-1)[0].id + 1,
                    message: state.newMessage
                }
                state.messageData.push(newMessageData);
                state.newMessage = "";
            }
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.value;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;