import React from "react";

import {item, senderInfo, senderName} from "./Post.module.css";


export default function Post({name, message, likesCount}) {
    return (
        <div className={item}>
            <div className={senderInfo}>
                <img src="https://i.redd.it/dh5otp8kcf741.png" alt="Фото"/>
                <div className={senderName}>
                    {name}
                </div>
            </div>
                <div>
                    {message}
                </div>
            <div>
                <span>Likes: </span>
                {likesCount}
            </div>
        </div>
    )
}