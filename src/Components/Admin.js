import React, {  useEffect,useState } from 'react';
import '../CSS/AdminPage.css';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
  const [userData, setUserData] = useState({
    "data": {
        "users": [
            {
                "_id": "657a9674294f3e688568b6ec",
                "name": "Niharika G",
                "phNo": 8712660123,
                "dob": "2023-08-10",
                "age": 18,
                "vaccines": [],
                "__v": 0
            },
            {
                "_id": "657a9d2a294f3e688568b72d",
                "name": "Divya Chakshu",
                "phNo": 7817890372,
                "dob": "2023-12-15",
                "age": 18,
                "vaccines": [],
                "__v": 0
            },
            {
                "_id": "657aa74a4e87f5fa2c56fc0a",
                "name": "Ashu",
                "phNo": 6969787834,
                "dob": "2023-12-28",
                "age": 18,
                "password": "ashu",
                "vaccines": [],
                "__v": 0
            }
        ]
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "395",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "method": "get",
        "url": "http://localhost:5000/admin/getAllUsers"
    },
    "request": {}
});
  // const navigate = useNavigate();
  useEffect(() => {
    // Simulating fetching data from a database
    fetchUserData().then((data)=>{
      console.log(data);
      setUserData(data);
    })
  }, []);
  const sendMessage = () => {
    fetch('https://evacc-backend45.onrender.com/send-message', {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };
  const fetchUserData = async () => {
    try{
        const response=await axios.get('https://evacc-backend45.onrender.com/admin/getAllUsers');
        console.log(response);
        // setUserData(response.data);
        return response;
      }catch(error) {console.log(error);}
  };
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
            {userData && userData.data.users.map(user => (
              <tr key={user.phNo}>
                <td>{user.name}</td>
                <td>#</td>
                <td>{user.phNo}</td>
                <td>{user.dob}</td>
                <td>{user.age}</td>
                <td>Not Vaccinated</td>
                <td><button onClick={sendMessage}>Send message</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
