import React from "react";

import {profile} from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export default function Profile(props) {
    return (
        <div className={profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}