import '../CSS/VaccineCard.css'

const VaccineCard = ({ vaccine })=> {
    return (
    <div className="vaccine-card">
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