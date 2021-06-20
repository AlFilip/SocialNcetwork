import React from "react";

import {userPhoto, userCard, userCountry, userCity, userName, userStatus} from "./User.module.css";


export default function User({isFollower, fullName, status, city, country, userId, toggleFollow}) {

    const followToggle = () => {
        toggleFollow(userId);
    }

    return (
        <div className={userCard}>
            <div>
                <img className={userPhoto} src="https://i.redd.it/dh5otp8kcf741.png" alt=""/>
                <button onClick={followToggle}>{isFollower ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={userName}>
                {fullName}
            </div>
            <div className={userStatus}>
                {status}
            </div>
            <div className={userCity}>
                {city}
            </div>
            <div className={userCountry}>
                {country}
            </div>
        </div>
    )
};