import React from "react";

import {addPostCreator, onPostChangeCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


export default function MyPostsContainer() {
    return     (
        <StoreContext.Consumer>
            {store => {
                const addPost = () => {
                    store.dispatch(addPostCreator());
                };

                const onPostChange = (text) => {
                    store.dispatch(onPostChangeCreator(text));
                }
                return <MyPosts
                    newPost={store.getState().profilePage.newPost}
                    postData={store.getState().profilePage.postData}
                    onPostChange={onPostChange}
                    addPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    )
}