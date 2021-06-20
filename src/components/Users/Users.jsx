import React from "react";

import {usersPage, usersList} from "./Users.module.css";
import User from "./User/User";


export default function Users(props) {
    const users = props.usersList.map(u => <User key={u.id} userId={u.id} fullName={u.fullName} status={u.status}
                                                 city={u.location.city} country={u.location.country}
                                                 isFollower={u.isFollower}
                                                 toggleFollow={props.toggleFollow}/>);
    return (
        <div className={usersPage}>
            <div className={usersList}>
                {users}
            </div>
        </div>
    )
};