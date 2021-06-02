import React from 'react'
import { ExternalLink } from 'react-external-link'

function Item(props) {
    return (
        <>
          <div className="portfolio__box">
                <div className="portfolio__thumb">
                <img src={props.img} alt="" />
                </div>
                <div className="portfolio__content">
                    <ExternalLink href={props.url}>
                        <h4>{props.title}</h4>
                    </ExternalLink>
                </div>
            </div>
        </>
    )
}

export default Item
