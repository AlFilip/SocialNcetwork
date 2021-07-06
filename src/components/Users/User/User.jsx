import React from "react";

import {NavLink} from "react-router-dom";
import userImg from "../../../assets/images/user.png"

import s from "./User.module.css";
import axios from "axios";


export default function User({followed, name, status, photos, city, country, userId, toggleFollow}) {
    const followToggle = (isFollow) => {
        const responseProcessing = (response) => {
            if (response.status === 200 && response.data.resultCode === 0) {
                toggleFollow(userId, isFollow);
            }
        }
        isFollow ? axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'c00575f9-9103-46ac-b44c-a92edd8e249f'
                }
            })
                .then(response => responseProcessing(response))
            : axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'c00575f9-9103-46ac-b44c-a92edd8e249f'
                }
            })
                .then(response => responseProcessing(response));
    }
    return (
        <div className={s.userCard}>
            <div>
                <NavLink to={`/profile/${userId}`}>
                    <img className={s.userPhoto} src={photos.small ? photos.small : userImg} alt=""/>
                </NavLink>
                <button onClick={() => followToggle(!followed)}>{followed ? "Unfollow" : "Follow"}</button>
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