import React from "react";

import {userCard, userCountry, userCity, userName, userStatus} from "./User.module.css";


export default function User({userId, fullName, status, city, country}) {
    return (
        <div className={userCard}>
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