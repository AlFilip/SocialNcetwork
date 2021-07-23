import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../assets/formControl/formControl";

const afterSubmit = (result, dispatch) => dispatch(reset('addPost'));

const maxLength50 = maxLengthCreator(50);

let AddPostForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={TextArea} name={"newPost"} placeholder={"Enter here"} validate={[required, maxLength50]} cols="100" rows="5"/>
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