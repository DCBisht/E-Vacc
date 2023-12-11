import React from 'react';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js';
import VaccineList from "./Components/VaccineList.js";
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
    path:'/VaccineList',
    element:<><Navbar/><VaccineList/></>,
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
