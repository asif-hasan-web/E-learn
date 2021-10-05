import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
       <div className="header ">
            <nav className="navbar navbar-dark bg  navbar-expand-md pt-3  pb-3" uk-sticky="top:200; animation;uk-animation-slide-top;bottom: #sticky-on-scroll-up">
        <div className="container">
            <a href="index.html" className="navbar-brand">E-Learn</a>
            <div id="navbarnav" className="collapse navbar-collapse justify-content-end   fs-5 ">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active text-secondary p-2 font-s">
                        <NavLink 
                        to="/home"
                        className="text-decoration-none"
                        activeStyle={{
                            fontweight:"bold",
                            color:"white"
                        }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item p-2  font-s">
                                <NavLink 
                        to="/service"
                        className="text-decoration-none"
                        activeStyle={{
                            fontweight:"bold",
                            color:"white"
                        }}
                        >
                            Service
                        </NavLink>
                        </li>
                    <li className="nav-item p-2  font-s">
                            <NavLink 
                    to="/404-NotFound"
                    className="text-decoration-none"
                    activeStyle={{
                        fontweight:"bold",
                        color:"white"
                    }}
                    >
                        Faq
                    </NavLink>
                    </li>
                    <li className="nav-item p-2  font-s">
                                <NavLink 
                        to="/about"
                        className="text-decoration-none"
                        activeStyle={{
                            fontweight:"bold",
                            color:"white"
                        }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item p-2  font-s">
                                <NavLink 
                        to="/contact"
                        className="text-decoration-none"
                        activeStyle={{
                            fontweight:"bold",
                            color:"white"
                        }}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
       </div>
    )
}

export default Header
