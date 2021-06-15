import React from "react";

import {addPostCreator, onPostChangeCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


export default function MyPostsContainer(props) {
    const addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    const onPostChange = (text) => {
        props.store.dispatch(onPostChangeCreator(text));
    }

    return <MyPosts
        newPost={props.store.getState().profilePage.newPost}
        postData={props.store.getState().profilePage.postData}
        onPostChange={onPostChange}
        addPost={addPost}
    />

}