import React from 'react';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js'
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
    element:<Navbar/>,
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
