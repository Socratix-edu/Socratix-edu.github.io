import React from 'react'
import {Link} from 'react-router-dom'

const CourseListing = props => {
  return (
    <Link to="/" className="card d-flex flex-row mx-5 my-3">
      <div>
        <img src="https://www.fillmurray.com/284/196" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </Link>
  )
}

export default CourseListing
