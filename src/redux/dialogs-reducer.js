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
};

const dialogsReducer = (state = initState, action) => {
    const stateCopy = {...state};
    switch (action.type) {
        case SEND_MESSAGE:
            if (stateCopy.newMessage) {
                stateCopy.messageData = [...state.messageData];
                const newMessageData = {
                    id: stateCopy.messageData.slice(-1)[0].id + 1,
                    message: stateCopy.newMessage
                };
                stateCopy.messageData.push(newMessageData);
                stateCopy.newMessage = "";
            }
            return stateCopy;
        case UPDATE_NEW_MESSAGE:
            stateCopy.newMessage = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default dialogsReducer;