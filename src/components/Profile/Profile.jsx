import React from "react";

import {profile} from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export default function Profile() {
    return (
        <div className={profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}