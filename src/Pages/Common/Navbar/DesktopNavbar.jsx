import React from 'react'
import { Link } from 'react-router-dom'

function DesktopNavbar() {
    return (
        <>
            <li class="icon-box active">
                <i class="fa fa-home"></i>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
            </li>
            <li class="icon-box">
                <i class="fa fa-user"></i>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
            </li>
            <li class="icon-box">
                <i class="fa fa-briefcase"></i>
                <Link to="/portpolio">
                    <h2>Portfolio</h2>
                </Link>
            </li>
            <li class="icon-box">
                <i class="fa fa-envelope-open"></i>
                <Link to="/contact">
                    <h2>Contact</h2>
                </Link>
            </li>
            <li class="icon-box">
                <i class="fa fa-comments"></i>
                <Link to="/blog">
                    <h2>Blog</h2>
                </Link>
            </li>
        </>
    )
}

export default DesktopNavbar
