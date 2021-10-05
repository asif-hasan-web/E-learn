
import React, { useState,useEffect } from 'react'
import Course from '../Course/Course';
import "./CoursePlan.css"



const CoursePlan = () => {
    const [course, setcourse]=useState([])
;    useEffect(()=>{
        fetch('../fakedata.json')
        .then(res => res.json())
        .then(data => setcourse(data));
    },[])
    
    return (
        <div className="container pt-5 bg-color">
            <div className="row text-start">
                <div className="col-md-6 ml-0 course-title">
                    <h5 className="text-primary">Our Courses</h5>
                    <h2>Choose Your Language</h2>
                </div>
                <div className="col-md-6 course-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            <div className="row">
               {
                        
                        course.map(course => <Course
                              key={Course.id}
                              course ={course}
                              
                          ></Course> ).slice(0,4) 
                          }
            </div>
            
        </div>
    )
}

export default CoursePlan
