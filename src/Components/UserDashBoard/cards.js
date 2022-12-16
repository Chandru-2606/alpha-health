import React from "react";
import './cards.css'

function Cards (props) {
    return(
        <div className="editPatients">
        <div className="editPatients-container">
        <input placeholder="Patient Name "value={props.patientName} onChange={(e) => { props.setPatientName(e.target.value) }}/><br/>
        <input placeholder="Contact" value={props.patientContact} onChange={(e) => { props.setPatientContact(e.target.value) }}/><br/>
        <input placeholder="Place" value={props.patientPlace} onChange={(e) => { props.setPatientPlace(e.target.value) }}/><br/>
        <input placeholder="Email" value={props.patientEmail} onChange={(e) => { props.setPatientEmail(e.target.value) }}/><br/>
       <input type="date" value={props.appointmentDate} onChange={(e) => { props.setAppoinmentDate(e.target.value) }}/><br/>
        <input placeholder="Problems" value={props.problem} onChange={(e) => { props.setProblem(e.target.value) }}/><br />
        </div>
        </div>
    );
}

export default Cards;