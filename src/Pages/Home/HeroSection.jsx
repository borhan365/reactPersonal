import React from 'react'
import Photo from '../Common/Photo/me.jpg'
import { Link } from 'react-router-dom'

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
                        <p className="open-sans-font">Here will be your some bio. I'm a Bangladeshi based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <Link to="/about" className="btn btn-about">more about me</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroSection
