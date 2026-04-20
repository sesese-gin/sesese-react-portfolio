import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#works">WORKS</a></li>
                    <li><a href="#profile">PROFILE</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;