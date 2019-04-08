import React from 'react';
import { Link } from "react-router-dom";

// import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Google Books</Link>
                    <ul id="nav-mobile" className="right">
                        <li className="hide-on-med-and-down"><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">Saved</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;