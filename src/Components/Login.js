import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "./store";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phNo, setPhNo] = useState("");
  const [dob, setDOB] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function AddNewUser() {
    if (!name || !password || !phNo || !dob) {
      alert("Please enter both username and password.");
      return;
    }
    const age = 18;
    // console.log({ name, password, phNo, dob, age });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ name, password, phNo, dob, age });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:5000/user/UserSignUp", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Check if the login was successful (you may need to adjust this based on your backend response)
        if (result != null) {
          // Navigate to the home page
          dispatch(userActions.login());
          localStorage.setItem("userId", result._id);
          navigate("/VaccineList");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Internal Server Error Please Try Again Later");}
        );
  }

  return (
    <div className="Login" id="Login">
      <img
        src="https://healthier.stanfordchildrens.org/wp-content/uploads/2022/06/21_1299711083_iStock-scaled.jpg"
        alt="image"
      />

      <div className="form">
        <div className="head">
        <Link to="/">
        <h1 className="my-logo">
          <span className="fas fa-heartbeat"></span> E-VACC
        </h1>
        </Link>
        <h1> WELCOME BACK!!</h1>
        </div>
        <h3 style={{ textAlign: "center" }}>Please Enter Your Details</h3>
        <input
          placeholder="Your Name"
          type="String"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          placeholder="Your Phone Number"
          type="number"
          value={phNo}
          onChange={(e) => setPhNo(e.target.value)}
        ></input>
        <input
          placeholder="Your Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div  className="flex">
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/Alogin">Are you an Admin</Link>
        </div>
        <button onClick={AddNewUser} className="login-button">
          {" "}
          Log In
        </button>{" "}
        
      </div>
    </div>
  );
};

export default Login;
