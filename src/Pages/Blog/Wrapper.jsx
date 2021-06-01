import React from 'react'
import Box from './Box'
import Data from './Data'

function Wrapper() {
    return (
        <>
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        {
                            Data.map((val) => {
                                return(
                                    <Box 
                                        img = {val.img}
                                        title = {val.title}
                                        desc = {val.desc}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wrapper
