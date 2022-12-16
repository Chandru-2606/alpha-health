import React, {useState, useEffect} from "react";
import Cards from "./cards";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './addAppoinment.css'


function AddAppoinment () {
    let { id } = useParams();
    let {role} = useParams()
    let navigate = useNavigate()

    const [Data, setData] = useState("")
    const [copyData, setCopyData] = useState("")
    const [patientName, setPatientName] = useState("")
    const [patientContact, setPatientContact] = useState("")
    const [patientPlace, setPatientPlace] = useState("")
    const [patientEmail, setPatientEmail] = useState("")
    const [problem, setProblem] = useState("")
    const [appointmentDate, setAppoinmentDate] = useState("")
    const [doctorId, setDoctorId] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(()=>{
        let DoctorsData = JSON.parse(localStorage.getItem("SignUpData"))
    let DoctorsData1 = JSON.parse(localStorage.getItem("doctorData"))

        setCopyData(DoctorsData1)

        const filteredLeave = DoctorsData.filter(employee=>{
            return employee.idd == id;
          })
        setData(DoctorsData1)
    }, [])
    const submit = () =>{
        if(!patientName || !patientContact || !patientPlace || !patientEmail || !problem ||  !appointmentDate || !doctorId  ){
            return setErrorMessage("Fill all the input ")
        }
      const AppoinmentData ={
        patientName:patientName,
        patientContact:patientContact,
        patientPlace:patientPlace,
        patientEmail:patientEmail,
        problem:problem,
        appointmentDate:appointmentDate,
        doctorId:doctorId,
        patientIdd:id,
        newId :uuidv4()
      }
      console.log("AppoinmentData", AppoinmentData)
      const expensereceived=localStorage.getItem("AppoinmentData")
        console.log(expensereceived);
        if(expensereceived==null){
          localStorage.setItem("AppoinmentData",JSON.stringify([AppoinmentData]))
        }
        else{
            let arr=JSON.parse(expensereceived);
            console.log(arr);
            arr.push(AppoinmentData);
            localStorage.setItem("AppoinmentData",JSON.stringify(arr));
          }
          navigate(`/UserDashBoard/${id}/${role}`)
    }
    
    const selectexpert = (e) =>{
        const filtered = copyData.filter(employee => {
            return employee.exportsIn == e.target.value;
          })
          console.log("filtered", filtered)
        setData(filtered)
    }

    const DocIdd = (e) =>{
      console.log("e", e.target.value)
      setDoctorId(e.target.value)
    }
    return(
        <div className="addApoinments-container">
        <div className="user-header">
                <a href="#">Add Appoinment</a>
                <div>
                  <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>
            </div>
             </div> 
         <div className="addPoinment-form">
<Cards patientName={patientName} patientContact={patientContact} patientPlace={patientPlace} patientEmail={patientEmail} 
                problem={problem}  appointmentDate={appointmentDate}
                setPatientName={setPatientName} setPatientContact={setPatientContact} setPatientPlace={setPatientPlace}
                setPatientEmail={setPatientEmail} setProblem={setProblem}  setAppoinmentDate={setAppoinmentDate}
                />
         

        <select onChange={selectexpert}>
        <option>Select</option>
         {Data && Data.map((item, index)=>{
            return(
                <option value={item.exportsIn}>{item.exportsIn}</option>
            );
         })}
                    </select><br/>

                    <select onChange={DocIdd}>
                        <option>Select Doctor</option>
                        {Data && Data.map((item, index)=>{
                            return(
                                <option value={item.idd}>{item.doctorName}</option>
                            );
                        })}
                    </select>
                    <br/>
                    <span>{errorMessage}</span>
                    <br/>

        <button onClick={submit}>Submit</button>
        </div>
        </div>
    );

}

export default AddAppoinment;