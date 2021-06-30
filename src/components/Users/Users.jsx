import React from "react";

import s from "./Users.module.css";
import User from "./User/User";
import axios from "axios";


export default class Users extends React.Component {

    getUsers = (pageNumber=1) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                debugger;
                this.props.setTotalUsersCount(response.data.totalCount);
            });
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

        let pages = [];
        for (let page = 1; page <= totalPagesCount; page++) {
            pages.push(page);
        }

        const changePage = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.getUsers(pageNumber);
        }

        const pagesNav = pages.map(page =>
            <span className={page === this.props.currentPage && s.currentPage}
                  onClick={() => changePage(page)}>{page}</span>
        )

        return (
            <div className={s.usersPage}>
                <div>
                    {pagesNav}
                </div>
                <div className={s.usersList}>
                    {users}
                </div>
            </div>
        )
    }
};