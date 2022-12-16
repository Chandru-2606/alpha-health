import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Cards from "./cards";
import './editDoctors.css'


function EditDoctor () {
    // getting params for what type of users
    let { id } = useParams();
    let {role} = useParams()
    let navigate = useNavigate()
    const [doctorName, setDoctorName] = useState("")
    const [contact, SetContact] = useState("")
    const [exportsIn, setExportsIn] = useState("")
    const [doctorMail, setDoctorMail] = useState("")
    const [doctorPassword, setDoctorPassword] = useState("")
    const [errorMessage, setErrorMeggage] = useState("")
    let DoctorsData = JSON.parse(localStorage.getItem("doctorData"))
    

    useEffect(() => {
        DoctorsData.map((item, index) => {
            if (item.idd === id && item.role == "doctor") {
                setDoctorName(item.doctorName)
                SetContact(item.contact)
                setExportsIn(item.exportsIn)
                setDoctorPassword(item.doctorPassword)
                setDoctorMail(item.doctorMail)
            }
            else {
                console.log("item not found")
            }
        })
        
    }, [])

    const formSubmitter = (e) =>{
        e.preventDefault();
     }

    const editDoc = ()=>{
      
    if(!doctorName || !doctorMail || !contact || !exportsIn  || !doctorPassword ){
        return setErrorMeggage("Fill all the Input")

    }
     const updatedDoctors = {doctorName:doctorName, doctorMail:doctorMail, contact:contact, exportsIn:exportsIn, doctorPassword:doctorPassword, idd:id, role:"doctor"}
     let objIndex = DoctorsData.findIndex((obj => obj.idd == id));
    DoctorsData[objIndex] = updatedDoctors
      console.log("updated expense",updatedDoctors)
      localStorage.setItem("doctorData",JSON.stringify(DoctorsData))
      console.log('roleeeeeeee',role)
      if(role == 'doctor'){
        console.log('inside if roleeeeeeee',role)
      navigate(`/Doctor/${id}/${role}`)
      }
      else{
        navigate(`/Admin/${role}`)
      }
    }
   
    const Remove = () =>{
        console.log("vgbh")
        let objIndex = DoctorsData.findIndex((obj => obj.idd == id));
        DoctorsData.splice(objIndex, 1)
         localStorage.setItem("doctorData",JSON.stringify(DoctorsData))
        navigate(`/Admin/${role}`)
    }

    return(
     <div>
        <div className="edit-header">
                <a href="#">Edit Doctor Profile</a>
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
        <div className="edit-btn">
        <span>{errorMessage}</span>

       <button  onClick={(e) => { editDoc(e) }}>Edit</button><br/>
       {role == "admin" ?
       <div>
       <button onClick={(e) => {  Remove(e)}}>Delete</button><br/>
       </div>
       : " " }
       </div>
       </form>
     </div>
    );
}
export default EditDoctor;