import React from 'react'
import { Link } from 'react-router-dom'

function MobileNavbar() {
    return (
        <>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul class="list-unstyled" id="menu">
                    <li class="active"><Link to="/"><i class="fa fa-home"></i><span>Home</span></Link></li>
                    <li><Link to="/about"><i class="fa fa-user"></i><span>About</span></Link></li>
                    <li><Link to="/portpolio"><i class="fa fa-folder-open"></i><span>Portfolio</span></Link></li>
                    <li><Link to="/contact"><i class="fa fa-envelope-open"></i><span>Contact</span></Link></li>
                    <li><Link to="/blog"><i class="fa fa-comments"></i><span>Blog</span></Link></li>
                </ul>
            </div>
        </>
    )
}

export default MobileNavbar
