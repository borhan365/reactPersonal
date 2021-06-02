import React from 'react'
import Photo from '../Common/Photo/me.jpg'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

function HeroSection() {
    return (
        <>
        <section className="container-fluid main-container container-home p-0">
            <div className="color-block d-none d-lg-block"></div>
            <div className="row home-details-container align-items-center">
                <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                    <div>
                        <img src={Photo} alt="Md Borhan Uddin" className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" />
                        <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                        <h1 className="text-uppercase poppins-font"><span>I'm</span> MD BORHAN UDDIN</h1>
                        <p className="open-sans-font">I'm a <ExternalLink className="bioLink" href="https://mdborhanuddin.com/" rel="noopener noreferrer" target="_self">Front-end Devloper</ExternalLink>  focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me. I’m a highly motivated, ambitious, and creative person who can make you happy to develop an amazing website.</p>
                        <Link to="/about" className="btn btn-about">more about me</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroSection
