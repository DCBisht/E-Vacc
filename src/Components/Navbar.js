import React from 'react';
import './style.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="header">
    <a href="/" className="logo"><i className="fas fa-heartbeat"></i> E-VACC</a>
    <nav className="navbar">
    <li className="nav-item x12">
        <a href="/">Home</a>
    </li>
    
    <li className="nav-item x12">
        <a href="/About">About</a>
        
    </li>
    {/* <li className="nav-item x12">
        <a href="/AdminDashBoard">AdminDashBoard</a>
        
    </li> */}
    {/* <li className="nav-item x12">
        <a href="/Profile">Profile</a>
    </li> */}
        <li className="nav-item dropdown x12">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div className="dropdown-menu x12" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/alogin">Admin Login</a>
          <a className="dropdown-item" href="/login">User Login</a>
         
        </div>
      </li>
    </nav>
    <div id="menu-btn" className="fas fa-bars"></div>
</div>
</nav>
  )
}

export default Navbar
