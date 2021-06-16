import React from "react";

import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


export default function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {store => {
                const updateMessage = (text) => {
                    store.dispatch(updateMessageCreator(text));
                }
                const sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                }

                return <Dialogs
                    updateMessage={updateMessage}
                    sendMessage={sendMessage}
                    newMessage={store.getState().messagesPage.newMessage}
                    dialogData={store.getState().messagesPage.dialogData}
                    messageData={store.getState().messagesPage.messageData}
                />
            }}
        </StoreContext.Consumer>
    )
}