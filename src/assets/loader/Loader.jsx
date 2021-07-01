import React from "react";

import s from "./loader.module.css"


export default function Loader() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.yellow}></div>
                <div className={s.red}></div>
                <div className={s.blue}></div>
                <div className={s.violet}></div>
            </div>
        </div>
    )
}
