import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from "./logo.jpg"

const Nav = () => {
  return (
    <div>
       <nav className="navbar bg-body-tertiary bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top logoImage" />
      groEZery
    </a>
  </div>
</nav>
    </div>
  )
}

export default Nav;