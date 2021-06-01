import React from 'react'

function Form() {
    return (
        <>
            <div className="col-12 col-lg-8">
                <form className="contactform" method="post" action="php/process-form.php">
                    <div className="contactform">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="text" name="name" placeholder="YOUR NAME" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="email" name="email" placeholder="YOUR EMAIL" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                            </div>
                            <div className="col-12">
                                <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                                <button type="submit" className="btn btn-contact">Send Message</button>
                            </div>
                            <div className="col-12 form-message">
                                <span className="output_message text-center font-weight-600 text-uppercase"></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
