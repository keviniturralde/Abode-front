import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'



function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>Log in</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>Send Message </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
