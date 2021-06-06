import React from "react";

import {
    dialogs,
    dialogsContent,
    dialogsList,
    messagesList
} from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";


export default function Dialogs(props) {
    const dialogsConv = props.messagesPage.dialogData
        .map(i => <DialogItem id={i.id} name={i.name}/>);

    const messagesConv = props.messagesPage.messageData
        .map(m => <MessageItem message={m.message}/>);
    return (
        <div className={dialogs}>
            <h2>Dialogs</h2>
            <div className={dialogsContent}>
                <div className={dialogsList}>
                    {dialogsConv}
                </div>
                <div className={messagesList}>
                    {messagesConv}
                </div>
            </div>
        </div>
    );
}