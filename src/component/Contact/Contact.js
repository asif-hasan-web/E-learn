import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (

        // contact section
        <div className="section-padding  theme3">
        <div className="container">
            <div className="row myt">
               <div className="col-md-5">
                <div className="tile-gellay"></div>
               </div>
                <div className="col-md-7">
                    <div className="comment-area pdt-50 ">

                        <h4 className="my-3 fs-2 fw-4">Get In Touch With Us</h4>
                        <p className="my-2 fs-6 fw-4">Sifting through teaspoons of clay and sand scraped from the floors of caves, German researchers have to be managed to isolate ancient human DNA without turning up a single bone. </p>

                        <div className="comment-form">
                            <form action="index.html">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Phone"/>
                                    </div>
                                    <div className="col-md-12">
                                         <input type="email" placeholder="Your Email"/>
                                     </div>
                                 </div>
                                        
                                <p><textarea name="comment" id="comment" placeholder="write Your Message" cols="30" rows="10"></textarea></p>
                                <input type="submit" className="btn btn-danger" value="Send Message"/>
                            </form>
                         </div>
                    </div>
               </div>
            </div>
        </div>
    </div>


    )
}

export default Contact
