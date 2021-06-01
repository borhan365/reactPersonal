import React from 'react'

function Content(props) {
    return (
        <>
            <h1 className="text-uppercase text-capitalize">{props.title}</h1>
                <div className="single__thumb">
                    <img src={props.img} className="img-fluid post__details__img" alt={props.title} />
                </div>
            <div className="blog-excerpt open-sans-font pb-5 para">
                <p> {props.desc} </p>
            </div>
        </>
    )
}

export default Content
