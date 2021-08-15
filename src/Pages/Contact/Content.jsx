import React from 'react'
import { ExternalLink } from 'react-external-link'

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
        </>
    )
}

export default Content
