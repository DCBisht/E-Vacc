import React,{useState} from 'react';
import  '../CSS/AddVaccine.css';
import { onAddVaccine } from '../api-calls/Helper';

const AddVaccineForm = () => {
  const [vaccineData, setVaccineData] = useState({
    name: '',
    when_to_give: '',
    dose: '',
    route: '',
    site: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaccineData({ ...vaccineData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVaccine(vaccineData).then(()=>{
      alert("Vaccine added sussesfully");
      setVaccineData({
        name: '',
        when_to_give: '',
        dose: '',
        route: '',
        site: '',
        description: '',
      });
    });
    // You can also reset the form after submission if needed
    
  };

  return (
    <div className='addVac'>
      <h2>Add New Vaccine</h2>
      <img src='https://cdn.pfizer.com/pfizercom/immunization-schedules.png?VersionId=v4tYO5v2HLa_TNucR7DWCAabEtTo3hdS'/>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={vaccineData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          When to Give:
          <input
            type="text"
            name="when_to_give"
            value={vaccineData.when_to_give}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Dose:
          <input
            type="text"
            name="dose"
            value={vaccineData.dose}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Route:
          <input
            type="text"
            name="route"
            value={vaccineData.route}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Site:
          <input
            type="text"
            name="site"
            value={vaccineData.site}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={vaccineData.description}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Vaccine</button>
      </form>
    </div>
  );
};

export default AddVaccineForm;

