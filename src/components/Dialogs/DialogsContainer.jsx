import React from "react";

import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


export default function DialogsContainer(props) {
    const updateMessage = (text) => {
        props.store.dispatch(updateMessageCreator(text));
    }
    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return <Dialogs
        updateMessage={updateMessage}
        sendMessage={sendMessage}
        newMessage={props.store.getState().messagesPage.newMessage}
        dialogData={props.store.getState().messagesPage.dialogData}
        messageData={props.store.getState().messagesPage.messageData}

    />
}