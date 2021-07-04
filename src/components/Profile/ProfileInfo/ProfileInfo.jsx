import React from "react";

import s from "./ProfileInfo.module.css";
import img from "../../../assets/images/user2.png"


export default function ProfileInfo (props) {
    debugger;
    return (
        <div className={s.profile_info}>
            <img src={props.profile && props.profile.photos.large ? props.profile.photos.large : img} alt="" />
            <div>
                <div >
                    <div className={s.name}>
                        {props.profile && props.profile.fullName}
                    </div>
                    <div className={s.status}>
                        {props.profile && props.profile.aboutMe}
                    </div>
                </div>
            </div>
        </div>
    );
}