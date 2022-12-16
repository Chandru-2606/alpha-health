import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import './login.css';




function Login () {
const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
      // Admin Login In Details

        let adminData = {
            adminName : "Admin",
            adminMail : "admin@gmail.com",
            adminPassword : "admin12345",
            role:"admin",
            idd:uuidv4()
        }


        // storing in localStorage
      const received =localStorage.getItem("adminData")
      if(received ==null){
        localStorage.setItem("adminData", JSON.stringify([adminData]))
      }
    }, [])


    useEffect(() =>{
      // Doctors Login In Details
        let doctorData = [
          {
          doctorName : "Chandru",
          doctorMail : "chandru@gmail.com",
          doctorPassword : "chandru12345",
          exportsIn : "Neurology",
          contact : 9517538520,
          role:"doctor",
          idd:uuidv4()
        },
        {
          doctorName : "boomer",
          doctorMail : "boomer@gmail.com",
          doctorPassword : "boomer12345",
          exportsIn : "Ortho",
          contact : 987465130,
          role:"doctor",
          idd:uuidv4()
        },

      ]
      
        // storing in localStorage
        const received =localStorage.getItem("doctorData")
        if(received ==null){
            localStorage.setItem("doctorData", JSON.stringify(doctorData))
           }
    })

    const formSubmitter = (e) =>{
        e.preventDefault();
     }

     const handleChange =(e) =>{
        setEmail(e.target.value )
      }
      const handlePassword = (e) => {
        setPassword(e.target.value )
      }


      // Getting Datas from localStorage
   let localrecived = JSON.parse(localStorage.getItem("adminData"))
   let RecivedSignUpData = JSON.parse(localStorage.getItem("SignUpData"))
   let DoctorsData = JSON.parse(localStorage.getItem("doctorData"))
   
  //  Submit Function to Check what type of user
   const Submit = () =>{

    // verifying Admin Login
    {localrecived && localrecived.map((item, index) => {
        if (email ==  (item.adminMail)  && password == (item.adminPassword) ) {
          return (navigate(`/Admin/${item.role}`));
        }
        else {
            setErrorMessage("Enter Valid email and Password")
        }
      console.log("submit triggered")
       
      })}

    // verifying Doctors Login
      {DoctorsData && DoctorsData.map((item, index) => {
        if (email ==  (item.doctorMail)  && password == (item.doctorPassword) ) {
          return (navigate(`/Doctor/${item.idd}/${item.role}`));
        }
        else {
            setErrorMessage("Enter Valid email and Password")
        }
      console.log("submit triggered")
       
      })}

      {RecivedSignUpData && RecivedSignUpData.map((item, index) => {
        if (email ==  (item.Email)  && password == (item.Password) ) {
          return navigate(`/UserDashBoard/${item.idd}/${item.role}`);
        }
        else {
            setErrorMessage("Enter Valid email and Password")
        }
      })}
   }




    return(
        <div className="login-container">
            <form onClick={formSubmitter}>
                <h3>Mojo Care</h3>
                <hr />
                 
                <input placeholder="Enter email / Username" onChange={(e) => {handleChange(e)}} />
                <br/>
               
                <input placeholder="Enter the Password" onChange={(e) => {handlePassword(e)}} />
                <br/>
                <span>{errorMessage}</span>
                <br />
                <button id="submit-btn" onClick={Submit}>Login</button>

                <div className="signUp-btn"> 
                    <p>Not a Member?</p>
                    <button  onClick={() => { 
              navigate("/SignUp")}}>Sign Up</button>
                </div>

            </form>
        </div>
    );
}

export default Login;