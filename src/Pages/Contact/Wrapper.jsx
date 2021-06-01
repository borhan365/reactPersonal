import React from 'react'
import Content from './Content'
import Form from './Form'

function Wrapper() {
    return (
        <>
           <section class="main-content">
                <div class="container">
                    <div class="row">
                        <Content />
                        <Form />
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Wrapper
