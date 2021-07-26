import React from "react";

import s from "./ProfileInfo.module.css";
import img from "../../../assets/images/user2.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Loader from "../../../assets/loader/Loader";


export default function ProfileInfo(props) {
    if (!props.profile) return  <Loader />
    return (
        <div className={s.profile_info}>
            <img src={props.profile && props.profile.photos.large ? props.profile.photos.large : img} alt=""/>
            <div>
                <div className={s.name}>
                    {props.profile && props.profile.fullName}
                </div>
                <ProfileStatus profile={props.profile} status={props.status} onStatusChange={props.onStatusChange}
                               setStatus={props.setStatus} userAuthData={props.userAuthData}/>
            </div>
        </div>
    );
}