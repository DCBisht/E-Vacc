import '../CSS/VaccineCard.css'
import { Link, useNavigate } from "react-router-dom";

const VaccineCard = ({ vaccine })=> {
    const navigate = useNavigate();
    const bookVaccine=()=>{
      navigate(`/booking/${vaccine._id}`);
    }
    return (
    <div className="vaccine-card" onClick={bookVaccine}>
      <div className="other">
      <h3>Vaccine Name : {vaccine.name}</h3>
      <p><strong>When to give:</strong> {vaccine.when_to_give}</p>
      <p><strong>Dose:</strong> {vaccine.dose}</p>
      <p><strong>Route:</strong> {vaccine.route}</p>
      <p><strong>Site:</strong> {vaccine.site}</p>
      </div>
      <div className="book-now">{vaccine.description}</div>
    </div>
  );
};

  export default VaccineCard;