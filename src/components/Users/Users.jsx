import React from "react";

import {usersPage, usersList} from "./Users.module.css";
import User from "./User/User";
import axios from "axios";


export default function Users(props) {
    if (props.usersList.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    debugger;
    const users = props.usersList.map(u => <User key={u.id} userId={u.id} name={u.name} status={u.status}
                                                 followed={u.followed} photos={u.photos}
                                                 toggleFollow={props.toggleFollow} setUsers={props.setUsers}/>);
    return (
        <div className={usersPage}>
            <div className={usersList}>
                {users}
            </div>
        </div>
    )
};