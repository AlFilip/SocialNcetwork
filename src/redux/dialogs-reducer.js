const SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageCreator = (value) => ({type: UPDATE_NEW_MESSAGE, value: value});

const dialogsReducer = (state, action) => {
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