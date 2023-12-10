import React from 'react';

import '../CSS/AdminDash.css';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
  const navigate = useNavigate();
  
  const handleView =(event)=> {
    // Logic for adding another user
    event.preventDefault();
    navigate('/Admin');
  };
  const handleClick=()=>{
    navigate("/CreateUser");
  };

  return (
    <div className='headi'><h1>Admin DashBoard</h1>
    <div className="landscape-view">
        
    <div className="button-container">
      <div className="image-container">
        <img src="https://icon-library.com/images/icon-data/icon-data-17.jpg" alt="Add User" className="button-image" />
      </div>
      <button className="add-user-button" onClick={handleView}>
       View database
      </button>
    </div>
    <div className="button-container">
      <div className="image-container">
        <img src="https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_1280.png" alt="Create User" className="button-image" />
      </div>
      <button className="create-user-button" onClick={handleClick}>
        Create User
      </button>
    </div>
  </div>
  
  </div>
  );
};

export default AdminDashBoard;
