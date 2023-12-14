import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store";
import { adminActions } from "./store";
function Navbar() {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const dispatch = useDispatch();
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
          {isAdminLoggedIn && (<>
          <li className="nav-item ">
            <Link to="/AdminDashBoard">AdminDashBoard</Link>
          </li>
          <li className="nav-item ">
            <Link to="/AddVaccine">AddVaccine</Link>
          </li>
          </>
          )}
          <li className="nav-item ">
            <Link to="/VaccineList">Vaccines</Link>
          </li>
          { !isUserLoggedIn && !isAdminLoggedIn && (
          <li className="nav-item dropdown ">
            <Link to="/login">Login</Link>
          </li>
  )}
          {( isUserLoggedIn) && (<>
          <li className="nav-item dropdown ">
            <Link to="/UserProfile">Profile</Link>
          </li>
          <li className="nav-item dropdown ">
            <Link to="/login" onClick={() => dispatch(userActions.logout())}>LogOut</Link>
          </li>
          </>)}
          {(isAdminLoggedIn ) && (<>
          <li className="nav-item dropdown ">
            <Link to="/login" onClick={() => dispatch(adminActions.logout())}>LogOut</Link>
          </li>
          </>)}
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
