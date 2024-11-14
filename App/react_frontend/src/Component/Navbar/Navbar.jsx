import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="bar">
            <a href="" className="logo">Logo</a>
            <nav className="navbar">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar