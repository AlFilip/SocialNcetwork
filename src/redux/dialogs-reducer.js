const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = (value) => ({type: SEND_MESSAGE, value});

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
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessageData = {
                id: state.messageData.slice(-1)[0].id + 1,
                message: action.value
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessageData],
            }
        default:
            return state;
    }
}

export default dialogsReducer;