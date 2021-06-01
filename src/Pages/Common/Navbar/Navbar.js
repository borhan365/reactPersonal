import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'


function Navbar() {
    return (
        <>
            <header class="header" id="navbar-collapse-toggle">

                {/* Desktop Navbar */}
                <ul class="icon-menu d-none d-lg-block">
                    <DesktopNavbar />
                </ul>

                {/* Mobile navbar */}
                <nav role="navigation" class="d-block d-lg-none">
                    <MobileNavbar />
                </nav>
            </header>
        </>
    )
}

export default Navbar
