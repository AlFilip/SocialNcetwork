import React from "react";
import {sidebar, friendItem, friendName, sidebarHeader} from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";


const Friend = ({id, name, src}) => {
    return (
        <NavLink className={friendItem} to={`/profile/${id}`}>
            <img src={src} alt=""/>
            <div className={friendName}>{name}</div>
        </NavLink>
    )
}

export default function Sidebar(props) {
    const friends = props.friendsList
        .map(friend => <Friend key={friend.id} id={friend.id} name={friend.name} src={friend.img} />);
    return (
        <div className={sidebar}>
            <h2 className={sidebarHeader}>Friends</h2>
            {friends}
        </div>
    )
}