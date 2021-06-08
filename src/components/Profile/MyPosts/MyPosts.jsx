import React from "react";
import {posts, posts_list, posts_title, posts_add_form} from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";


export default function MyPosts(props) {
    const postsConverted = props.profilePage.postData
        .map(p => <Post name={p.name} message={p.message} likesCount={p.likesCount} />);

    const textArea = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = textArea.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <>
            <div className={posts}>
                <div className={posts_title}>
                    My Posts
                </div>
                <div className={posts_add_form}>
                    <textarea ref={textArea} value={props.profilePage.newPost} onChange={onPostChange}
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