import React from 'react'
// import '../CSS/style.css';
function Icon() {
  return (
    <div>
       <section className="icons-container">
        {/* <div className="icons">
            <i className="fas fa-user-md"></i>
            <h3>140+</h3>
            <p>doctors at work</p>
        </div> */}
        <div className="icons">
            <i className="fas fa-users"></i>
            <h3>1040+</h3>
            <p>satisfied patients</p>
        </div>
        <div className="icons">
            <i className="fas fa-procedures"></i>
            <h3>50+</h3>
            <p>Vaccine Research Information</p>
        </div>
        <div className="icons">
            <i className="fas fa-hospital"></i>
            <h3>80+</h3>
            <p>available hospitals</p>
        </div>
    </section>
    </div>
  )
}

export default Icon

