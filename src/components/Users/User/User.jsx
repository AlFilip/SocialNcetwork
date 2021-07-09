import React from "react";

import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

import userImg from "../../../assets/images/user.png"
import s from "./User.module.css";


export default function User({
                                 followed, name, status, photos, city, country, userId, toggleFollow,
                                 toggleFollowInProgress, usersToggleFollowInProgress,
                             }) {
    const followToggle = (isFollow) => {
        toggleFollowInProgress(userId);
        usersAPI.followToggle(isFollow, userId).then(resultCode => {
            if (resultCode === 0) {
                toggleFollow(userId, isFollow);
            }
        }).finally(() => {
            toggleFollowInProgress(userId)
        });
    };
    return (
        <div className={s.userCard}>
            <div>
                <NavLink to={`/profile/${userId}`}>
                    <img className={s.userPhoto} src={photos.small ? photos.small : userImg} alt=""/>
                </NavLink>
                <button disabled={usersToggleFollowInProgress.some(u => u === userId)}
                        onClick={() => followToggle(!followed)}>{followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={s.userName}>
                {name}
            </div>
            <div className={s.userStatus}>
                {status && `Status: ${status}`}
            </div>
            <div className={s.userCity}>
                {"city"}
                {city}
            </div>
            <div className={s.userCountry}>
                {"country"}
                {country}
            </div>
        </div>
    )
};
