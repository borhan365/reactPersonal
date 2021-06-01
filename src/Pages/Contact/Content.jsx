import React from 'react'
import { Link } from 'react-router-dom'

function Content() {
    return (
        <>
            <div className="col-12 col-lg-4">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p className="open-sans-font custom-span-contact position-relative">
                    <i className="fa fa-envelope-open position-absolute"></i>
                    <span className="d-block">mail me</span>info.mdborhan@gmail.com
                </p>
                <p className="open-sans-font custom-span-contact position-relative">
                    <i className="fa fa-phone-square position-absolute"></i>
                    <span className="d-block">call me</span>+88-01818458934
                </p>
                <ul className="social list-unstyled pt-1 mb-5">
                    <li className="facebook"><Link title="Facebook" to="https://www.facebook.com/borhan365/"><i className="fab fa-facebook"></i></Link>
                    </li>
                    <li className="twitter"><Link title="Twitter" to="https://www.facebook.com/borhan365"><i className="fab fa-twitter"></i></Link>
                    </li>
                    <li className="youtube"><Link title="Youtube" to="https://www.facebook.com/borhan365"><i className="fab fa-youtube"></i></Link>
                    </li>
                    <li className="dribbble"><Link title="Dribbble" to="https://www.facebook.com/borhan365"><i className="fab fa-dribbble"></i></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Content
