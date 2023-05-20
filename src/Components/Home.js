import React from 'react';
import './style.css';
export default function Home() {
  return (
    <section className="home" id="home">
        <div className="image">
            <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000" alt="home-img.svg"/>
        </div>
        <div className="content">
            <h3>stay safe, stay healthy, stay vaccinated</h3>
            <p> Vaccination throughout the childhood is very essential as it helps in providing immunity before children are exposed to any life-threatening diseases.</p>
        </div>
    </section>
  )
}
