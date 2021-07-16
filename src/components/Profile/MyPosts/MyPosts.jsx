import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";

const afterSubmit = (result, dispatch) => dispatch(reset('addPost'));

let AddPostForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPost"} placeholder={"Enter here"} cols="100" rows="5"/>
        <button>Add Post</button>
    </form>
}

AddPostForm = reduxForm({form: "addPost",
    onSubmitSuccess: afterSubmit,})(AddPostForm);

export default function MyPosts(props) {
    const postsConverted = props.postData
        .map(p => <Post key={p.id} name={p.name} message={p.message} likesCount={p.likesCount} />);
    return (
        <>
            <div className={s.posts}>
                <div className={s.posts_title}>
                    My Posts
                </div>
                <div className={s.posts_add_form}>
                    <AddPostForm onSubmit={props.submit}/>
                </div>
            </div>
            <div className={s.posts_list}>
                {postsConverted}
            </div>
        </>
    )
}