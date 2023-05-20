import './Form.css';
import axios from 'axios';
const CreateUser = () => {
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Logic to handle form submission
    const firstName=event.target.firstName.value;
    const lastName=event.target.lastName.value;
    const phNo=event.target.phNo.value;
    const dob=event.target.dob.value;
    const age=event.target.age.value;

    try{
        const response=await axios.post('/admin/createUsers',{firstName,lastName,phNo,dob,age});
        console.log(response);
      }catch(error) {console.log(error);}
  };

  return (
    <div className='xyz'>
    <div className="form-container">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phNo"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CreateUser;
