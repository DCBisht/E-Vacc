import React from 'react';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js';
import About from './Components/About.js'
import VaccineList from "./Components/VaccineList.js";
import SignUp from './Components/SignUp.js';
import Alogin from './Components/Alogin.js';
import AddVaccine from './Components/AddVaccine.js';
import CreateUser from './Components/createUser.js';
import Booking from './Components/Booking.js'
import AdminDashBoard from './Components/AdminDashBoard.js';
import Admin from './Components/Admin.js'
import UserProfile from './Components/UserProfile.js';
const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/></>
  },
  {
    path:'/CreateUser',
    element: <><Navbar/><CreateUser/></>
  },
  {
    path:'/AddVaccine',
    element: <><Navbar/><AddVaccine/></>
  },
  {
    path:'/login',
    element:<><Login/></>
  },
  {
    path:'/userProfile',
    element:<><Navbar/><UserProfile/></>
  },
  {
    path:'/SignUp',
    element:<><SignUp/></>
  },
  {
    path:'/Alogin',
    element:<><Alogin/></>
  },
  {
    path:'/VaccineList',
    element:<><Navbar/><VaccineList/></>,
  },
  {
    path:'/About',
    element:<><Navbar/><About/></>,
  },
  {
    path:'/Booking',
    element:<><Navbar/><Booking/></>,
  },
  {
    path:'/AdminDashBoard',
    element:<><Navbar/><AdminDashBoard/></>
  },
  {
    path:'/Admin',
    element:<><Navbar/><Admin/></>
  }
]);
function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
      
    </React.Fragment>
  );
}

export default App;
