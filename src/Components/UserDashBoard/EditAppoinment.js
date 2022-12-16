import React, {useState, useEffect} from "react";
import Cards from "./cards";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function EditAppoinment () {
    let { id } = useParams();
    console.log("idddddddddddddd", id)
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
    const [patientIdd, setPatientId] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    let Appoinments = JSON.parse(localStorage.getItem("AppoinmentData"))

    useEffect(() => {
    let DoctorsData1 = JSON.parse(localStorage.getItem("doctorData"))
    setData(DoctorsData1)
    setCopyData(DoctorsData1)


        Appoinments.map((item, index) => {
            if (item.newId === id) {
                setPatientName(item.patientName)
                setPatientContact(item.patientContact)
                setPatientPlace(item.patientPlace)
                setPatientEmail(item.patientEmail)
                setProblem(item.problem)
                setAppoinmentDate(item.appointmentDate)
                setPatientId(item.patientIdd)
            }
            else {
                console.log("item not found")
            }
        })
    }, [])
    const selectexpert = (e) =>{
        const filtered = copyData.filter(employee => {
            return employee.exportsIn == e.target.value;
          })
          console.log("filtered", filtered)
        setData(filtered)
    }
    console.log( "patientIdd",patientIdd)

    const DocIdd = (e) =>{
      console.log("e", e.target.value)
      setDoctorId(e.target.value)
    }

    const EditAppoinment = (e) => {
        if(!patientName || !patientContact || !patientPlace || !patientEmail || !problem ||  !appointmentDate || !doctorId  ){
            return setErrorMessage("Fill all the input ")
        }
        const updatedAppoinment = {
            patientName:patientName,
        patientContact:patientContact,
        patientPlace:patientPlace,
        patientEmail:patientEmail,
        problem:problem,
        appointmentDate:appointmentDate,
        doctorId:doctorId,
        newId :id,
        patientIdd:patientIdd
        }
         console.log("updated expense",Appoinments)

        let objIndex = Appoinments.findIndex((obj => obj.newId == id));
        // console.log("objIndex", objIndex)
         Appoinments[objIndex] = updatedAppoinment
         localStorage.setItem("AppoinmentData",JSON.stringify(Appoinments))
         navigate(`/UserDashBoard/${patientIdd}/${role}/`)
        //  navigate(`/UserDashBoard/${id}/${role}`)

    }

    return(
          <div addApoinments-container>
            <div className="user-header">
                <a href="#">Edit Appoinment</a>
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
                    <span>{errorMessage}</span> <br/>

            <button onClick={EditAppoinment}>Edit</button>
            </div>
          </div>
         );
}

export default EditAppoinment;