import React from 'react';
import { Link } from "react-router-dom";

// import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <a href="#!" className="brand-logo">Google Books</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">Saved</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;