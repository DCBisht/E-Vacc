import React, { useState } from 'react';
import '../CSS/s.css';
const VaccineList = () => {
  const [vaccines, setVaccines] = useState([
    { id: 1, name: 'Vaccine 1', chosen: false },
    { id: 2, name: 'Vaccine 2', chosen: false },
    { id: 3, name: 'Vaccine 3', chosen: false },
    // { id: 4, name: 'Vaccine 4', chosen: false },
    // Add more vaccines here if needed
  ]);

  const toggleVaccine = (id) => {
    setVaccines((prevVaccines) =>
      prevVaccines.map((vaccine) =>
        vaccine.id === id ? { ...vaccine, chosen: !vaccine.chosen } : vaccine
      )
    );
  };

  const vaccinatedVaccines = vaccines.filter((vaccine) => vaccine.chosen);
  const notVaccinatedVaccines = vaccines.filter((vaccine) => !vaccine.chosen);

  return (
    <div className="vaccine-list">
      <h1>Vaccine List</h1>
      <div className="vaccine-column">
        <h2>Vaccinated</h2>
        <ul>
          {vaccinatedVaccines.map((vaccine) => (
            <li key={vaccine.id} className="chosen">
              <input
                type="checkbox"
                checked={vaccine.chosen}
                onChange={() => toggleVaccine(vaccine.id)}
              />
              {vaccine.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="vaccine-column">
        <h2>Not Vaccinated</h2>
        <ul>
          {notVaccinatedVaccines.map((vaccine) => (
            <li key={vaccine.id}>
              <input
                type="checkbox"
                checked={vaccine.chosen}
                onChange={() => toggleVaccine(vaccine.id)}
              />
              {vaccine.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VaccineList;
