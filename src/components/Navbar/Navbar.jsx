import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export default function Navbar() {
    return (
        <div className={s.navbar}>
            <NavLink className={s.item} to="/profile" activeClassName={s.active}>
                <i className="fi-rr-user"/>
            </NavLink>

            <NavLink className={s.item} to="/dialogs" activeClassName={s.active}>
                <i className="fi-rr-envelope"/>
            </NavLink>

            <NavLink className={s.item} to="/users" activeClassName={s.active}>
                <i className="fi-rr-users"/>
            </NavLink>

            <NavLink className={s.item} to="/news" activeClassName={s.active}>
                <i className="fi-rr-world"/>
            </NavLink>

            <NavLink className={s.item} to="/music" activeClassName={s.active}>
                <i className="fi-rr-music-alt"/>
            </NavLink>

            <NavLink className={s.item} to="/settings" activeClassName={s.active}>
                <i className="fi-rr-settings-sliders"/>
            </NavLink>
        </div>
    )
}