import React from "react";

import {usersPage, usersList} from "./Users.module.css";
import User from "./User/User";
import axios from "axios";


export default class Users extends React.Component {

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=3&page=1")
            .then(response => this.props.setUsers(response.data.items));
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const users = this.props.usersList.map(u => <User key={u.id} userId={u.id} name={u.name} status={u.status}
                                                          followed={u.followed} photos={u.photos}
                                                          toggleFollow={this.props.toggleFollow}
                                                          setUsers={this.props.setUsers}/>);


        const totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pagesList = (totalPagesCount) => {
            let pagesList=[];
            for (let page = 1; page++; page <= totalPagesCount) {
                pagesList.push(page);
            }
            return pagesList;
        }


        return (
            <div className={usersPage}>
                <div className={usersList}>
                    {users}
                </div>
            </div>
        )
    }
};