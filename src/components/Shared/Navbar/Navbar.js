import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="sticky-top nav-all">
           <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#0">Home</a></li>
                <li className="menu-item">
                <a href="#0">Widgets</a>
                <ol className="sub-menu">
                    <li className="menu-item"><a href="#0">Big Widgets</a></li>
                    <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
                    <li className="menu-item"><a href="#0">Huge Widgets </a></li>
                </ol>
                </li>
                <li className="menu-item">
                <a href="#0">Kabobs</a>
                <ol className="sub-menu">
                    <li className="menu-item"><a href="#0">Shishkabobs</a></li>
                    <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
                    <li className="menu-item"><a href="#0">Summer kabobs</a></li>
                </ol>
                </li>
                <li className="menu-item"><a href="#0">Contact</a></li>
                <li className="menu-item"><a href="/account">My Account</a></li>
            </ol>
            </nav>
        </div>
    );
};

export default Navbar;