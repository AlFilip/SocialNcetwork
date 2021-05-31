import React from "react";

import {NavLink} from "react-router-dom";
import {dialogs, dialogsContent, dialogsList, dialogItem, activeDialog, messagesList, messageItem} from "./Dialogs.module.css"


const DialogItem = ({id, name}) => {
    return (
        <div className={dialogItem}>
            <NavLink to={`/dialogs/${id}`} activeClassName={activeDialog}>
                {name}
            </NavLink>
        </div>
    );
}

const MessageItem = ({message}) => {
    return (
        <div className={messageItem}>
            {message}
        </div>
    );
}

export default function Dialogs() {
    return (
        <div className={dialogs}>
            <h2>Dialogs</h2>
            <div className={dialogsContent}>
                <div className={dialogsList}>
                    <DialogItem id={1} name={"Alex"} />
                    <DialogItem id={2} name={"Sergey"} />
                    <DialogItem id={3} name={"Artem"} />
                </div>
                <div className={messagesList}>
                    <MessageItem message={"Hi man"} />
                    <MessageItem message={"How you doing?"} />
                </div>
            </div>
        </div>
    );
}