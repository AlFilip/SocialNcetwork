import React from "react";
import s from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={s.navbar}>
            <div>
                <a href="#">My Profile</a>
            </div>
            <div>
                 <a href="#">Messages</a>
            </div>
            <div>
                 <a href="#">Photo</a>
            </div>
            <div>
                 <a href="#">Music</a>
            </div>
            <div>
                 <a href="#">Settings</a>
            </div>
        </div>
    )
}