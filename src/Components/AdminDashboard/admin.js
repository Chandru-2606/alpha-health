import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './admin.css'

function Admin () {
    let navigate = useNavigate()
    let {role} = useParams()
    const[data, setData] = useState("")
    const [newData, setNewData] = useState("")

    let PatientsData = JSON.parse(localStorage.getItem("SignUpData"))
    let AppoinmentData = JSON.parse(localStorage.getItem("AppoinmentData"))


    useEffect(()=>{
        let DoctorsData = JSON.parse(localStorage.getItem("doctorData"))
        setData(DoctorsData)
        const Datessssss =DoctorsData && DoctorsData.map(t1 => ({...t1, ...AppoinmentData && AppoinmentData.find(t2 => t2.doctorId === t1.idd)}))
        console.log("Datees", Datessssss)
        setNewData(Datessssss)

    }, [])
console.log("newData", newData)

    return (
        <div className="admin-container">
             <div className="header">
                <a href="#">Admin DashBoard</a>
                <div>
                    {/* {data && data.map((item, index)=>{
                return(
                    <ul key={index}>
                        {/* <button onClick={() => {
                  navigate(`/EditDoctor/${item.idd}/${item.role}`)
                }}>Edit Profile</button> */} 
            <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>

                    {/* </ul>
                );
            })} */}
            </div>
             </div>
             <div className="conatiner">
                <div className="head-list">
            <h3>Doctors List</h3>

            <button onClick={() => { 

               navigate("/AddDoctors")}}>Add Doctor</button>
               </div>
               <div className="admin-doclist1">
   <ul>
    <li>Doctor Name</li>
    <li>Doctor Mail</li>
    <li> Contact</li>
    <li>Expert In</li>
    <li></li>
   </ul>
</div>
               <div className="admin-doclist">
            {data && data.map((item, index)=>{
                return(
                    <ul key={index}>
                        <li>{item.doctorName}</li>
                        <li>{item.doctorMail}</li>
                        <li>{item.contact}</li>
                        <li>{item.exportsIn}</li>
                        <button onClick={() => {
                  navigate(`/EditDoctor/${item.idd}/${role}`)
                }}>Edit Doctors</button>
                    </ul>
                );
            })}
            </div>

</div>
        
        <div className="conatiner">
        <div className="head-list">
            <h3>Patient List</h3>
               </div>

               <div className="admin-doclist1">
   <ul>
    <li>Patient Name</li>
    <li> Mail</li>
    <li> Location</li>
    <li>Contact</li>
    <li>Role</li>
   </ul>
</div>
      

<div className="admin-doclist">
            {PatientsData && PatientsData.map((item, index)=>{
                return(
                    <ul key={index}>
                        <li>{item.Name}</li>
                        <li>{item.Email}</li>
                        <li>{item.Location}</li>
                        <li>{item.Contact}</li>
                        <li>{item.role}</li>
                    </ul>
                );
            })}
            </div>
        </div>

         <div className="conatiner">
         <div className="head-list">
            <h3>Appoinment List</h3>
               </div>
               <div className="admin-doclist1">
   <ul>
    <li>Patient Name</li>
    <li>Patient Location</li>
    <li>Issue</li>
    <li>Appoinment Date</li>
    <li>Doctor</li>
   </ul>
</div>
<div className="admin-doclist">
            {newData && newData.map((item, index)=>{
                return(
                    <div>
                    { item.newId ?
                    <div key={index} className="appoinmentData" >
                        <li>{item.patientName}</li>
                        <li>{item.patientPlace}</li>
                        <li>{item.problem}</li>
                        <li>{item.appointmentDate}</li>
                        <li>{item.doctorName}</li>
                    </div>
                    : ""}
                    </div>
                );
            })}
            </div>
         </div>
        </div>
    );
}
export default Admin;