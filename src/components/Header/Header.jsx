import React from "react";

import {header} from "./Header.module.css";

export default function Header() {
    return (
        <header className={header}>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt="" />
            <div>Header Text</div>
        </header>
    )
}