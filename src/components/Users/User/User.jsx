import React from "react";

import userImg from"../../../assets/images/user.png"

import {userPhoto, userCard, userCountry, userCity, userName, userStatus} from "./User.module.css";


export default function User({followed, name, status, photos, city, country, userId, toggleFollow}) {

    const followToggle = () => {
        toggleFollow(userId);
    }

    return (
        <div className={userCard}>
            <div>
                <img className={userPhoto} src={photos.small? photos.small : userImg} alt=""/>
                <button onClick={followToggle}>{followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={userName}>
                {name}
            </div>
            <div className={userStatus}>
                {status}
            </div>
            <div className={userCity}>
                {"city"}
            </div>
            <div className={userCountry}>
                {"country"}
            </div>
        </div>
    )
};