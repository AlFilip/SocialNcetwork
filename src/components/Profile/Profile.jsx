import React from "react";

import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


export default function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.profile_info}>
                <img src="https://i.redd.it/dh5otp8kcf741.png" alt="" />
                <div>Profile Text</div>
            </div>
            <MyPosts />
        </div>
    )
}