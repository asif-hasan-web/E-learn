import React from 'react'
import './Course.css'

const Course = (props) => {
    const {name, price, picture, flag, student,about}= props.course;
    return (
        
       
            <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow p-3 mb-5 bg-body rounded-3">
                             <div className="img-thmb">
                                <img className="card-img-top  picture" src={picture}  />
                                <img className="img-thumbnail  flag" src={flag}  />
                             </div>
                        <div className="card-body text-start">
                            <h5 className="card-title"><span className="font-blue">${price}/</span> <span className="color-style">lifetime</span> </h5>
                            <h3 className="card-title"> Intensive {name} Course</h3>
                            <p className="card-text">{about}</p>
                            <h5 className="card-left "><i className="fas fa-users icon"></i> <span className="gray-color">{student} students</span> </h5>
                            <button type="button" className="btn btn-info enroll-btn ">Enroll now</button>
                        </div>
                     </div></div>
    )
}

                              

export default Course
