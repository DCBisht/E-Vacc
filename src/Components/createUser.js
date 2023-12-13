import "../CSS/AddVaccine.css";
import axios from "axios";
const CreateUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle form submission
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phNo = event.target.phNo.value;
    const dob = event.target.dob.value;
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
      <h2>User Information Form</h2>
      <img src="https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2021/11/a-Black-woman-perhaps-the-mother-holding-a-child-in-doctors-office-getting-a-vaccine-all-wearing-masks-16x9-1.jpg" />
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="firstName">
          First Name:
          <input type="text" id="firstName" name="firstName" required />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" id="lastName" name="lastName" required />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input type="tel" id="phoneNumber" name="phNo" required />
        </label>
        <label htmlFor="dob">
          Date of Birth:
          <input type="date" id="dob" name="dob" required />
        </label>
        <label htmlFor="age">
          Age:
          <input type="number" id="age" name="age" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
