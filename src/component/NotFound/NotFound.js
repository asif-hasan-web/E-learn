import React from 'react'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <h3 className="text-warning fw-bold fs-1"> <span className="text-danger fw-bolder fs-1">404</span> Page not Found</h3>
            <p className="text-danger">Dont't ask me about this page.</p>
        </div>
    )
}

export default NotFound
