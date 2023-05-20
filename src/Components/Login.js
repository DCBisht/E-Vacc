import React from 'react';
import './Login.css';
import './Alogin.css';
import axios from 'axios';
import { useState } from 'react';
// import UserProfile from './User';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Login() {

  const [userData,setUserData]=useState([]);
  const navigate = useNavigate();
  const handleUser=async (event)=>{
    event.preventDefault();
    const dob=event.target.dob.value;
    const phNo=event.target.PhNo.value;
    
    try{
      const response=await axios.post('/user/UserLogin',{dob,phNo});
      console.log(response);
      setUserData(response.data);
      // navigate('/UserProfile',{userData:userData});
    }catch(error) {console.log(error);}
  }
  return (
    <div>
    <div className="wrapper">
      <div className="form signup">
        <header>Vaccine Status</header>
        <form onSubmit={handleUser}> 
          <input type="string" name="dob" placeholder="Date of Birth" required />
          <input type="number" name="PhNo" placeholder="Phone Number" required />
          <input type="submit" className="button" value="See Vaccination Status" />
        </form>
      </div>
      </div>
      <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Vaccination Status</th>
              <th>Message</th>
             
            </tr>
          </thead>
          <tbody>
            {userData && userData.map(user => (
              <tr key={user.phNo}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phNo}</td>
                <td>{user.dob}</td>
                <td>{user.age}</td>
                <td>false</td>
                <td><button >Send message</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

