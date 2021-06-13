import React from "react";

import {posts, posts_list, posts_title, posts_add_form} from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, onPostChangeCreator} from "../../../redux/profile-reducer";


export default function MyPosts(props) {
    debugger;
    const postsConverted = props.profilePage.postData
        .map(p => <Post name={p.name} message={p.message} likesCount={p.likesCount} />);

    const addPost = () => {
        props.dispatch(addPostCreator());
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.dispatch(onPostChangeCreator(text));
    }

    return (
        <>
            <div className={posts}>
                <div className={posts_title}>
                    My Posts
                </div>
                <div className={posts_add_form}>
                    <textarea value={props.profilePage.newPost} onChange={onPostChange}
                              cols="100" rows="5" placeholder="Enter here" />
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={posts_list}>
                {postsConverted}
            </div>
        </>
    )
}