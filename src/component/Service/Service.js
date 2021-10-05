import React, { useEffect, useState } from 'react'
import Course from '../Course/Course';

const Service = () => {
    const [course, setCourse]=useState([]);
    useEffect(()=>{
        fetch('../fakedata.json')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[])
    return (
        
            <div className="container">
                <div className="row pt-5 row-cols-1 row-cols-md-3 g-4">
                {
                    course.map(course => <Course
                        key={course.id}
                        course ={course}
                    ></Course> ) 
                    }
                </div>
               
            </div>
    )
}

export default Service
