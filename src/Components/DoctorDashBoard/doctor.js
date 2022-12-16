import React, {useState, useEffect} from "react";
// import Header from "../../header/header";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import "./doctor.css"


function Doctor () {
    let navigate = useNavigate()
    let { id } = useParams();
    let { role } = useParams();
    console.log("role", role)

    const[data, setData] = useState("")
    let Appoinments = JSON.parse(localStorage.getItem("AppoinmentData"))

    useEffect(()=>{
        let DoctorsData = JSON.parse(localStorage.getItem("doctorData"))
        let Appoinments = JSON.parse(localStorage.getItem("AppoinmentData"))
  
  const Datessssss =DoctorsData && DoctorsData.map(t1 => ({...t1, ...Appoinments && Appoinments.find(t2 => t2.doctorId === t1.idd)}))
  console.log("Datessssss", Datessssss)


        const filteredLeave = Datessssss.filter(employee=>{
            return employee.idd == id;
          })
        setData(filteredLeave)
    }, [])
    return(
        <div className="docotr-container">
            <div className="header">
                <a href="#">Doctor DashBoard</a>
                <div>
                    {data && data.map((item, index)=>{
                return(
                    <ul key={index}>
                        <button onClick={() => {
                  navigate(`/EditDoctor/${item.idd}/${item.role}`)
                }}>Edit Profile</button>
            <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>

                    </ul>
                );
            })}
            </div>
             </div>
<div className="test"></div>
<div className="head">
<h3>New Appoinments</h3>
</div>
{Appoinments ? 
<div>
             <div className="doctor-details1">
   <ul>
    <li>Doctor Name</li>
    <li>Appoinment Date</li>
    <li>Patient Name</li>
   </ul>
</div>

<div className="doctor-details">
    {data && data.map((item, index)=>{
        return(
   <ul>
    <li>{item.doctorName}</li>
    <li>{item.appointmentDate}</li>
    <li>{item.patientName}</li>
   </ul>
   );
})}
</div>
</div>
 : <span className="no-appoin">No New Appoinments</span> }

        </div>
    )
}

export default Doctor;