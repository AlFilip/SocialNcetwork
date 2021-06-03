import {messageItem} from "./Message.module.css";
import React from "react";

export default function MessageItem ({message}) {
    return (
        <div className={messageItem}>
            {message}
        </div>
    );
}