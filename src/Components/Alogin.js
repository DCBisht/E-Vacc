import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Alogin = () => {
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const navigate = useNavigate();
  function AddNewUser() {
    if ( !password || !phNo ) {
      alert("Please enter both username and password.");
      return;
    }
    const age = 18;
    // console.log({ name, password, phNo, dob, age });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ password, adminId });
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
          <span className="fas fa-heartbeat"></span> E-VACCs
        </h1>
        </Link>
        <h1> WELCOME BACK!!</h1>
        </div>
        <h3 style={{ textAlign: "center" }}>Please Enter Your Admin Credentials</h3>
        
        <input
          placeholder="Admin Id"
          type="String"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div  className="flex">
        <Link to="/Login">Login as a normal User</Link>
        {/* <Link to="/Alogin">Are you an Admin</Link> */}
        </div>
        <button onClick={AddNewUser} className="login-button">
          {" "}
          Enter
        </button>{" "}
        
      </div>
    </div>
  );
};

export default Alogin;
