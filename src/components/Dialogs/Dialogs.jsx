import React from "react";

import {
    dialogs,
    dialogsContent,
    dialogsList,
    messagesList,
    addMessage,
} from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";


export default function Dialogs(props) {
    const dialogsConv = props.dialogData
        .map(i => <DialogItem id={i.id} name={i.name}/>);

    const messagesConv = props.messageData
        .map(m => <MessageItem message={m.message}/>);

    const updateMessage = (e) => {
        const text = e.target.value;
        props.updateMessage(text);
    }
    const sendMessage = () => {
        props.sendMessage();
    }

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
            <div className={addMessage}>
                <textarea value={props.newMessage} onChange={updateMessage}
                          cols="80" rows="5" placeholder="Enter here"/>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}