import React from 'react'
import { Link } from 'react-router-dom'

function Box(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                <article className="post-container">
                    <div className="post-thumb blogpost__thumb">
                        <Link to="/single" className="d-block position-relative overflow-hidden">
                            <img src={props.img} className="img-fluid" alt={props.title} />
                        </Link>
                    </div>
                    <div className="post-content">
                        <div className="entry-header">
                            <h3><Link to="/single">{props.title}</Link></h3>
                        </div>
                        <div className="entry-content open-sans-font">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Box
