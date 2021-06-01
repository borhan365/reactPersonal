import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <>
          <div className="portfolio__box">
                <div className="portfolio__thumb">
                <img src={props.img} alt="" />
                </div>
                <div className="portfolio__content">
                    <Link to="/single">
                        <h4>{props.title}</h4>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
