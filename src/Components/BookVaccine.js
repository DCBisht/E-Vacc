import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getVaccineDetails } from '../api-calls/Helper';

export default function BookVaccine() {
    const id = useParams().id;
    const [vaccine,setVaccine]= useState([
        {
            name:"Dummy",
        }
    ]);
    useEffect(()=>{
        getVaccineDetails({id}).then((data)=>{
            console.log(data);
            setVaccine(data.vaccine);
            console.log(vaccine);
        })
    },[]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Logic to handle form submission
        
        const date = event.target.date.value;
        const age = event.target.age.value;
    
        try {
          const response = await axios.post("/admin/createUsers", {
            firstName,
            lastName,
            phNo,
            dob,
            age,
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        <div className="addVac">
          <h2>Book Vaccine</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY89iRmOS_nQMk7biVl2YgKIwv5lA2SRnNwg&usqp=CAU" />
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="firstName">
              Vaccine Name:
              <h4>{vaccine.name}</h4>
            </label>
            <label htmlFor="date">
              Booking Date:
              <input type="date" id="dob" name="dob" required />
            </label>
            <label htmlFor="age">
              Your Age:
              <input type="number" id="age" name="age" required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
