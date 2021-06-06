import React from "react";

import {posts, posts_list, posts_title, posts_add_form} from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function MyPosts(props) {
    const postsConverted = props.postData
        .map(p => <Post name={p.name} message={p.message} likesCount={p.likesCount} />);
    const showAlert = () => alert("Alert");
    return (
        <>
            <div className={posts}>
                <div className={posts_title}>
                    My Posts
                </div>
                <div className={posts_add_form}>
                    <textarea name="postInput" id="postInput" cols="100" rows="5" placeholder="Enter here"/>
                    <button onClick={showAlert}>Add Post</button>
                </div>
            </div>
            <div className={posts_list}>
                {postsConverted}
            </div>
        </>
    )
}