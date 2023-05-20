import React, {  useEffect,useState } from 'react';
import './AdminPage.css';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  //const navigate = useNavigate();
  useEffect(() => {
    // Simulating fetching data from a database
    fetchUserData()
  }, []);

  const fetchUserData = async () => {
    try{
        const response=await axios.get('/admin/getAllUsers');
        console.log(response);
        setUserData(response.data);
      }catch(error) {console.log(error);}
  };
const handleOnclick= async()=>{

}
  return (
    <div className="admin-page">
      <h1>Welcome to the Admin Page</h1>
      <div className="admin-content">
        <h2>Patient's Vaccine Management</h2>
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
                <td>Not Vaccinated</td>
                <td><button onClick={handleOnclick}>Send message</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
