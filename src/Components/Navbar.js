import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="header">
        <Link to="/" className="logo">
          <i className="fas fa-heartbeat"></i> E-VACC
        </Link>
        <nav className="navbar">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item ">
            <Link to="/About">About</Link>
          </li>
          <li className="nav-item ">
            <Link to="/AdminDashBoard">AdminDashBoard</Link>
          </li>
          <li className="nav-item ">
            <Link to="/AddVaccine">AddVaccine</Link>
          </li>
          <li className="nav-item ">
            <Link to="/VaccineList">Vaccines</Link>
          </li>
          <li className="nav-item dropdown ">
            <Link to="/login">Login</Link>
          </li>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
