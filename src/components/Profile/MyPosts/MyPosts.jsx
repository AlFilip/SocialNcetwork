import React from "react";

import {posts, posts_list, posts_title, posts_add_form} from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function MyPosts() {
    return (
        <>
            <div className={posts}>
                <div className={posts_title}>
                    My Posts
                </div>
                <div className={posts_add_form}>
                    <textarea name="postInput" id="postInput" cols="100" rows="5" placeholder="Enter here"/>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={posts_list}>
                <Post name={"Alexey Filippov"} message={"Hello World!"} likesCount={25}/>
                <Post name={"Alexey Filippov"} message={"Bla bla bla"} likesCount={20}/>
            </div>
        </>
    )
}