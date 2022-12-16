import React from "react";
import './cards.css'

function Cards (props){
    // const [doctorName, setDoctorName] = useState("")
    // const [contact, SetContact] = useState("")
    // const [exportsIn, setExportsIn] = useState("")
    // const [doctorPassword, setDoctorPassword] = useState("")
    return(
        <div className="editDoc">
        <div className="editDoc-container">
       <input placeholder="Doctor Name" value={props.doctorName} onChange={(e) => { props.setDoctorName(e.target.value) }}/><br/>
       <input placeholder="Contact" value={props.contact} onChange={(e) => { props.SetContact(e.target.value) }}/><br/>
       <input placeholder="Exports In" value={props.exportsIn} onChange={(e) => { props.setExportsIn(e.target.value) }}/><br/>
       <input placeholder="E-mail" value={props.doctorMail} onChange={(e) => { props.setDoctorMail(e.target.value) }}/><br/>
       <input placeholder="Password" value={props.doctorPassword} onChange={(e) => { props.setDoctorPassword(e.target.value) }}/><br/>
        </div>
        </div>
    );
}

export default Cards;