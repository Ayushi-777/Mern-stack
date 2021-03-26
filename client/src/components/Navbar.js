import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a className="navbar-brand" href="#"> 
  <img src={logo} alt="logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link " to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/signup">SignUp</NavLink>
      </li>
    </ul>
  
  </div>
</nav>
        </div>
    )
}

export default Navbar
