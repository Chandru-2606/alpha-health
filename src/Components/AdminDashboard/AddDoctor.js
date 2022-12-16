import React, {useState} from "react";
import Cards from "./cards";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import './addDoctors.css'


function AddDoctors () {
    let navigate = useNavigate()
    
    // State
    const [doctorName, setDoctorName] = useState("")
    const [contact, SetContact] = useState("")
    const [exportsIn, setExportsIn] = useState("")
    const [doctorMail, setDoctorMail] = useState("")
    const [doctorPassword, setDoctorPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitter = (e) =>{
        e.preventDefault();
     }

    //  Storing On LocalStorage
     const submit =()=>{

        if(!doctorName || !contact || !exportsIn || !doctorMail || !doctorPassword ){
            return setErrorMessage("Fill all the input ")
        }

        let DoctorsData = JSON.parse(localStorage.getItem("doctorData"))
        const doctors = {doctorName:doctorName, contact:contact, exportsIn:exportsIn, doctorMail:doctorMail, doctorPassword:doctorPassword, idd:uuidv4(), role:"doctor"}
        DoctorsData.push(doctors)
        localStorage.setItem("doctorData",JSON.stringify(DoctorsData))
        navigate(`/Admin/${`admin`}`)

     }
    return(
        <div className="addDoctor-container"> 
              <div className="header">
                <a href="#">Add Doctor</a>
                <div>

            <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>
                    
            </div>
             </div>
            <form onClick={formSubmitter}>
            <Cards  doctorName={doctorName} contact={contact} exportsIn={exportsIn} doctorPassword={doctorPassword} doctorMail={doctorMail}
                setDoctorName={setDoctorName} SetContact={SetContact} setExportsIn={setExportsIn} setDoctorPassword={setDoctorPassword} setDoctorMail={setDoctorMail}
        />
        <div id="submit-btn">         
            <span>{errorMessage}</span><br/>
        <button  onClick={(e) => {submit(e)}}>Add Doctors</button>
        </div>

            </form>
        </div>
    );
}

export default AddDoctors