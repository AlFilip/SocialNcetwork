import React from "react";

import s from "./Post.module.css";


export default function Post({message, likesCount}) {
    return (
        <div className={s.item}>
            <img src="https://i.redd.it/dh5otp8kcf741.png" alt="Фото"/>
            {message}
            <div>
                <span>Likes: </span>
                {likesCount}
            </div>
        </div>
    )
}