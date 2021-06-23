import React from "react";

import {usersPage, usersList} from "./Users.module.css";
import User from "./User/User";
import axios from "axios";


export default class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        const users = this.props.usersList.map(u => <User key={u.id} userId={u.id} name={u.name} status={u.status}
                                                          followed={u.followed} photos={u.photos}
                                                          toggleFollow={this.props.toggleFollow}
                                                          setUsers={this.props.setUsers}/>);
        return (
            <div className={usersPage}>
                <div className={usersList}>
                    {users}
                </div>
            </div>
        )
    }
};