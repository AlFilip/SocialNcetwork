import React from "react";

import s from "./Header.module.css";

export default function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt=""/>
            {props.isAuth ? <div className={s.loginFrame}>{props.login}</div>
                : <div className={s.loginFrame}>Login</div>}

        </header>
    )
}