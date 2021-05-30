import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function MyPosts() {
    return (
        <>
            <div className={s.posts}>
                <div className={s.posts_title}>
                    My Posts
                </div>
                <div className={s.posts_add_form}>
                    <textarea name="postInput" id="postInput" cols="100" rows="5" placeholder="Enter here"/>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts_list}>
                <Post message={"Hello World!"} likesCount={25}/>
                <Post message={"Bla bla bla"} likesCount={20}/>
            </div>
        </>
    )
}