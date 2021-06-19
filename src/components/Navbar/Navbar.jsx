import React from "react";
import {navbar, item, active} from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={navbar}>

            <NavLink className={item} to="/profile" activeClassName={active}>
                <i className="fi-rr-user"/>
            </NavLink>

            <NavLink className={item} to="/dialogs" activeClassName={active}>
                <i className="fi-rr-envelope"/>
            </NavLink>

            <NavLink className={item} to="/users" activeClassName={active}>
                <i className="fi-rr-users"/>
            </NavLink>

            <NavLink className={item} to="/news" activeClassName={active}>
                <i className="fi-rr-world"/>
            </NavLink>

            <NavLink className={item} to="/music" activeClassName={active}>
                <i className="fi-rr-music-alt"/>
            </NavLink>

            <NavLink className={item} to="/settings" activeClassName={active}>
                <i className="fi-rr-settings-sliders"/>
            </NavLink>

        </div>
    )
}