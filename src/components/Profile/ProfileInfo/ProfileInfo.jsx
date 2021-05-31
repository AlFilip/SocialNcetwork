import React from "react";

import {profile_info} from "./ProfileInfo.module.css";


export default function ProfileInfo () {
    return (
        <div className={profile_info}>
            <img src="https://i.redd.it/dh5otp8kcf741.png" alt="" />
            <div>Profile Text</div>
        </div>
    );
}