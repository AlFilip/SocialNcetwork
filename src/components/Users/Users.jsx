import React from "react";

import s from "./Users.module.css";
import User from "./User/User";


export default function Users (props) {
    const users = props.usersList.map(u => <User key={u.id} userId={u.id} name={u.name} status={u.status}
                                                      followed={u.followed} photos={u.photos}
                                                      toggleFollow={props.toggleFollow}
                                                      setUsers={props.setUsers}/>);

    const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let page = 1; page <= totalPagesCount; page++) {
        pages.push(page);
    }
    const pagesNav = pages.map(page =>
        <span key={+page} className={page === props.currentPage? s.currentPage : ""}
              onClick={() => props.changePage(page)}>{page}</span>
    )

    return(
        <div className={s.usersPage}>
            <div className={s.pageNav}>
                {pagesNav}
            </div>
            <div className={s.usersList}>
                {users}
            </div>
        </div>
    )
}