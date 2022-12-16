import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './useDashBoard.css'



function UserDashBoard () {
    let { id } = useParams();
    let {role} = useParams()
    let navigate = useNavigate()

    const [Data, setData] = useState("")


   

    useEffect(()=>{



    let Appoinments = JSON.parse(localStorage.getItem("AppoinmentData"))
    let DoctorData = JSON.parse(localStorage.getItem("doctorData"))


  const Datessssss =Appoinments && Appoinments.map(t1 => ({...t1, ...DoctorData.find(t2 => t2.idd === t1.doctorId)}))
  console.log("Datessssss", Datessssss)
    

        const filteredLeave = Datessssss && Datessssss.filter(employee=>{
            return employee.patientIdd == id;
          })
    console.log("Appoinments", filteredLeave)
    setData(filteredLeave)

    }, [])

    
    return(
       <div className="user-container">
        <div className="user-header">
                <a href="#">Doctor DashBoard</a>
                <div>
                <button onClick={() => {
                    navigate(`/EditPatients/${id}/${role}`)}}>Edit Profile</button>
                      <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>
            </div>
             </div>
        
        {/* userDashBoard */}
        
                
       <div id="addappoinement-btn">
                       <button  onClick={() => {
                    navigate(`/AddAppoinment/${id}/${role}`)}}>AddAppoinment </button><br/>
</div>
<div className="test"></div>

<div className="appoinment-details1">
   <ul>
    <li>Patient Name</li>
    <li>Appoinment Date</li>
    <li>Doctor Name</li>
    <li></li>
   </ul>
</div>
<div className="appoinment-details">
      {Data && Data.map((item, index)=>{
        return(
         <ul key={index}>
            <li>{item.patientName}</li>
            <li>{item.appointmentDate}</li>
            <li>Dr . {item.doctorName}</li>
            <button onClick={() => {
               navigate(`/EditAppoinment/${item.newId}/${role}`)}}>EditAppoinment</button>
         </ul>
         );
        })}
        </div>
      
            
       </div>
    );
}

export default UserDashBoard;