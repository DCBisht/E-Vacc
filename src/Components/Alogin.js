import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Alogin.css';
import axios from 'axios';

function Alogin() {
  const navigate = useNavigate();
    const handleLogin=async (event)=>{
      event.preventDefault();

      const fullName=event.target.fname.value;
      const password=event.target.pwd.value;

      try{
        const response=await axios.post('/admin/Login',{fullName,password});
        navigate('/AdminDashBoard');
        console.log(response);
      }catch(error) {console.log(error);}
    }

    // const handleSignUp=async (event)=>{
    //   event.preventDefault();

    //   const fullName=event.target.fname.value;
    //   const password=event.target.pwd.value;

    //   try{
    //     const response=await axios.post('/admin/SignUp',{fullName,password});
    //     navigate('/Alogin');
    //     console.log(response);
    //   }catch(error) {console.log(error);}
    // }

    return (
    <div className="wrapper">
      <div className="form signup">
        <header>Admin's DashBoard</header>
        <form onSubmit={handleLogin}>
          <input type="text" name="fname" placeholder="Full Name" required />
          <input type="password" name="pwd" placeholder="Password" required />
          
          <button type="submit" className='button'>Login</button>
          {/* //<button onClick={handleSignUp} className='button'>SignUp </button> */}
        </form>
      </div>
    </div>
  )
}

export default Alogin
