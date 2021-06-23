import React from "react";

import {profile_info} from "./ProfileInfo.module.css";
import img from "../../../assets/images/user2.png"


export default function ProfileInfo (props) {
    return (
        <div className={profile_info}>
            <img src={props.imgSrc? props.imgSrc : img} alt="" />
            <div>Profile Text</div>
        </div>
    );
}