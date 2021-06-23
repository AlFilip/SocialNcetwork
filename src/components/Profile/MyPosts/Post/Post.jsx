import React from "react";

import {item, senderInfo, senderName, likesCounter} from "./Post.module.css";
import img from "../../../../assets/images/user2.png";


export default function Post({name, message, likesCount, imgSrc}) {
    return (
        <div className={item} >
            <div className={senderInfo}>
                <img src={imgSrc? imgSrc : img} alt="Фото"/>
                <div className={senderName}>
                    {name}
                </div>
            </div>
            <div>
                {message}
            </div>
            <div className={likesCounter}>
                <span><i className="fi-rr-heart"/></span>
                {likesCount}
            </div>
        </div>
    )
}