import React from 'react'
import Excerpt from './Excerpt'
import Data from './Data'
import Content from './Content'

function Wrapper() {
    return (
        <>
        <section className="main-content">
          <div className="container">
              <div className="row">
                  <article className="col-12">
                    <Excerpt />

                    {
                        Data.map((val) => {
                            return(
                                <Content 
                                    img = {val.img}
                                    title = {val.title}
                                    desc = {val.desc}
                                />
                            )
                        })
                    }

                  </article>  
              </div>
          </div>
        </section>
        </>
    )
}

export default Wrapper
