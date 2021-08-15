import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

function PersonalInfo() {
    return (
        <>
           {/* Personal Info Starts */}
            <div className="col-12 col-lg-5 col-xl-6">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal info</h3>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        {/* <img src="img/me.jpg" className="img-fluid main-img-mobile" alt="my picture" /> */}
                    </div>
                    <div className="col-6">
                        <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">first name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Mohammed</span> </li>
                            <li> <span className="title">last name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Borhan Uddin</span> </li>
                            <li> <span className="title">Age :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">24 Years</span> </li>
                            <li> <span className="title">Hobbies :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Travel, Video Gaming, Designing</span> </li>
                            <li> <span className="title">Nationality :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Bangladeshi</span> </li>
                            <li> <span className="title">Profession :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Front-end Developer</span> </li>
                        </ul>
                        
                        <ul className="social list-unstyled pt-1 mb-5 mobile-full-width">
                            <li className="facebook"><ExternalLink title="Facebook" href="https://www.facebook.com/borhan365/"><i className="fab fa-facebook"></i></ExternalLink>
                            </li>
                            <li className="twitter"><ExternalLink title="Twitter" href="https://www.facebook.com/borhan365"><i className="fab fa-twitter"></i></ExternalLink>
                            </li>
                            <li className="youtube"><ExternalLink title="Youtube" href="https://www.facebook.com/borhan365"><i className="fab fa-youtube"></i></ExternalLink>
                            </li>
                            <li className="dribbble"><ExternalLink title="Dribbble" href="https://www.facebook.com/borhan365"><i className="fab fa-dribbble"></i></ExternalLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">Address :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Khulshi 4, Chattogram, Bangladesh</span> </li>
                            <li> <span className="title">phone :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">01818458934</span> </li>
                            <li> <span className="title">Email :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">info.mdborhan@gmail.com</span> </li>
                            <li> <span className="title">Skype :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">mdborhanuddin</span> </li>
                            <li> <span className="title">languages :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Bengali, English, & Hindi</span> </li>
                        </ul>
                    </div>
                    <div className="col-12 mt-3">
                        <Link to="/about" className="btn btn-download">Download CV</Link>
                    </div>
                </div>
            </div>
            {/* Personal Info Ends */}

            {/* Boxes Starts */}
            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                <div className="row">
                    <div className="col-6">
                        <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">4</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">97</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box-stats">
                            <h3 className="poppins-font position-relative">81</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">Happy<span className="d-block">customers</span></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box-stats">
                            <h3 className="poppins-font position-relative">53</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">awards <span class="d-block">won</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Boxes Ends */}
            <hr class="separator" />
        </>
    )
}

export default PersonalInfo
