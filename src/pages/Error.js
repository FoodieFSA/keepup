// import React from 'react'
import {NavLink} from 'react-router-dom'
const Error = () => {
  return (
    <div style={{flex: 1}}>
      <h1>404 Error Page</h1>
      <h2>Sorry, This page doesn't exist</h2>
      <NavLink to="/"> Go Back </NavLink>
    </div>
  )
}

export default Error
