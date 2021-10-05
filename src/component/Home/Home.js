import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <section className="banner bg-info bg-opacity-25">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-start">
                        <h1>Learn New <br /> Languages and <br /> Move Forward</h1>
                        <p className="c-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque eius voluptatibus odio rerum nihil facere, maxime optio natus inventore?</p>
                        <button type="button" className="btn btn-outline-primary mt-2 p-3 align-item-start ">Get Started</button>
                    </div>
                    <div className="col-md-6">
                       <div className="img-content">

                       </div>
                    </div>
                </div>
            </div>
                
        </section>
        
        
    )
}

export default Home
