import React from 'react'
import "./Icons.css"
const Icons = () => {
    return (
        
            <div className="py-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 my-2 d-flex align-items-center">
                            <i className="fas fa-laptop tutor"></i>
                                <h3 className="my-2 fs-4 fw-normal">Online Tutoring</h3>
                            </div>
                            <div className="col-md-3 my-2 d-flex align-items-center">
                            <i className="fas fa-book-reader course"></i>
                                <h3 className="my-2 fs-4 fw-normal">50+ Courses</h3>
                            </div>
                            <div className="col-md-3 my-2 d-flex align-items-center">
                            <i className="fas fa-users acces"></i>
                                <h3 className="my-2 fs-4 fw-normal">Lifetime Access</h3>
                            </div>
                            <div className="col-md-3 my-2 d-flex align-items-center">
                            <i className="fas fa-users learn"></i>
                                <h3 className="my-2 fs-4 fw-normal">Activate Learning</h3>
                            </div>
                        </div>
                </div>
             </div>
    )
}

export default Icons;
