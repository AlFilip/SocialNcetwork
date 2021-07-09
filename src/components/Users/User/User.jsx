import React from "react";

import {NavLink} from "react-router-dom";

import userImg from "../../../assets/images/user.png"
import s from "./User.module.css";


export default function User(props) {
    const toggleFollow = (isFollow) => {
        props.toggleFollow(props.userId, isFollow);
    };
    return (
        <div className={s.userCard}>
            <div>
                <NavLink to={`/profile/${props.userId}`}>
                    <img className={s.userPhoto} src={props.photos.small ? props.photos.small : userImg} alt=""/>
                </NavLink>
                <button disabled={props.usersToggleFollowInProgress.some(u => u === props.userId)}
                        onClick={() => toggleFollow(!props.followed)}>{props.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={s.userName}>
                {props.name}
            </div>
            <div className={s.userStatus}>
                {props.status && `Status: ${props.status}`}
            </div>
            <div className={s.userCity}>
                {"city"}
                {props.city}
            </div>
            <div className={s.userCountry}>
                {"country"}
                {props.country}
            </div>
        </div>
    )
};
