import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function MyPosts(props) {
    const postsConverted = props.postData
        .map(p => <Post key={p.id} name={p.name} message={p.message} likesCount={p.likesCount} />);

    const onPostChange = (e) => {
        const text = e.target.value;
        props.onPostChange(text);
    }
    return (
        <>
            <div className={s.posts}>
                <div className={s.posts_title}>
                    My Posts
                </div>
                <div className={s.posts_add_form}>
                    <textarea value={props.newPost} onChange={onPostChange}
                              cols="100" rows="5" placeholder="Enter here" />
                    <button onClick={props.addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts_list}>
                {postsConverted}
            </div>
        </>
    )
}