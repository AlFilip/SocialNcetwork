import React from "react";

import {profile} from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export default function Profile(props) {
    debugger;
    return (
        <div className={profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}