import React from "react";

import s from "./Header.module.css";

export default function Header(props) {
    debugger;
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt="" />
            <div>{props.login}</div>
        </header>
    )
}