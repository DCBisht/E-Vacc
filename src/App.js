import React from 'react';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js';
import About from './Components/About.js'
import VaccineList from "./Components/VaccineList.js";
import SignUp from './Components/SignUp.js';
import Alogin from './Components/Alogin.js';
const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/></>
  },
  {
    path:'/login',
    element:<><Login/></>
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
