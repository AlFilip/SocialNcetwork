import {activeDialog, dialogItem} from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export default function DialogItem ({id, name}) {
    return (
        <div className={dialogItem}>
            <NavLink to={`/dialogs/${id}`} activeClassName={activeDialog}>
                {name}
            </NavLink>
        </div>
    );
}