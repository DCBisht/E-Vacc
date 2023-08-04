// import './App.css';
import About from "./Components/About";

// import Book from "./Components/Book";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Icon from "./Components/Icon";
import Navbar from "./Components/Navbar";

import Login from "./Components/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Alogin from "./Components/Alogin";
// import User from "./Components/User";
import AdminPage from "./Components/Admin";
import AdminDashBoard from "./Components/AdminDashBoard";
import CreateUser from './Components/createUser';
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Icon />
               
               
              </>
            }
          />
          <Route path="/About" element={<About />} />

          

          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
          <Route path="/CreateUser" element={<CreateUser/>} />
         

         

          <Route path="/Login" element={<Login />} />
          <Route path="/UserProfile" element={<UserProfile/>} />

          <Route path="/Admin" element={<AdminPage/>} />
          <Route path="/Alogin" element={<Alogin />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
