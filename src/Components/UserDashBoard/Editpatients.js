import React, {useState, useEffect} from "react";
import Cards from "../Cards/cards";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './editPatients.css'



const EditPatients = () =>{
    let { id } = useParams();
    let {role} = useParams();
    let navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [location, setLoctaion] = useState("")
    const [errorMeassage, setErrorMessage] = useState("")

    let patientData = JSON.parse(localStorage.getItem("SignUpData"))
    // console.log("DoctorsData", DoctorsData)

    useEffect(() => {
        patientData.map((item, index) => {
            if (item.idd === id) {
                setName(item.Name)
                setEmail(item.Email)
                setPassword(item.Password)
                setContact(item.Contact)
                setLoctaion(item.Location)
            }
            else {
                console.log("item not found")
            }
        })
    }, [])
    const formSubmitter = (e) =>{
        e.preventDefault();
     }
    const editPatient = () =>{
      const updatedPatients ={Name : name, Email:email, Password:password, Contact:contact, Location:location , idd:id, role:"patient"}
    //   console.log("updatedPatients", updatedPatients)
    let objIndex = patientData.findIndex((obj => obj.idd == id));
    patientData[objIndex] = updatedPatients
    // console.log("updated expense",updatedPatients)
    localStorage.setItem("SignUpData",JSON.stringify(patientData))
    navigate(`/UserDashBoard/${id}/${role}`)

    }
return(
    <div className="editpat">
           <div className="editPatients-header">
                <a href="#">Edit Patients Profile </a>
                <div>
                
                      <button onClick={() => { 
               navigate("/");
        }} >LogOut</button>
            </div>
             </div>
<form onClick={formSubmitter}>
    <Cards name={name} email={email} password={password} contact={contact} location={location}
                setName={setName} setEmail={setEmail} setPassword={setPassword} setContact={setContact} setLoctaion={setLoctaion}/>
    <button  onClick={(e) => { editPatient(e) }}>Edit</button>
    </form>

    </div>
);
}

export default EditPatients;