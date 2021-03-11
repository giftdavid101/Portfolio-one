import React from 'react';
import './navbar.style.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <nav>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/about'}>
                    About
                </Link>
                <Link to={'/works'}>
                   Works
                </Link>
                <Link to={'/contact'}>
                    chat
                </Link>
                <Link to={'/blog'}>
                    Blog
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;