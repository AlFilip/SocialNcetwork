import React from "react";

import {profile} from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export default function Profile(props) {
    return (
        <div className={profile}>
            <ProfileInfo profile={props.profile} status={props.status}
                         setStatus={props.setStatus} userAuthData={props.userAuthData}/>
            <MyPostsContainer/>
        </div>
    );
}