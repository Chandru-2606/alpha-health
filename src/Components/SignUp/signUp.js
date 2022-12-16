import React, { useState }  from "react";
import Cards from "../Cards/cards";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import './signUp.css'



function SignUp () {
const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [location, setLoctaion] = useState("")
    const [errorMeassage, setErrorMessage] = useState("")

    const formSubmitter = (e) =>{
        e.preventDefault();
     }

const Submit = (e) =>{

    if(!name || !email || !password || !contact || !location ){
        return setErrorMessage("Fill all the input ")
    }
    const SignUpData = {
        Name : name, Email:email, Password : password, Contact:contact, Location:location, idd:uuidv4(), role:"patient"
    }
    console.log("SignUpData", SignUpData)
    const Datareceived=localStorage.getItem("SignUpData")
    console.log("Datareceived", Datareceived)
     if(Datareceived==null){
        localStorage.setItem("SignUpData",JSON.stringify([SignUpData]))
      }
      else{
        let arr=JSON.parse(Datareceived);
        console.log(arr);
        arr.push(SignUpData);
        localStorage.setItem("SignUpData",JSON.stringify(arr));
      }
    navigate("/")
    }


     return (
        <div className="signUp-form">
            <form onClick={formSubmitter}>
            <h1>Sign Up</h1>
            <hr/>
            <Cards name={name} email={email} password={password} contact={contact} location={location}
                setName={setName} setEmail={setEmail} setPassword={setPassword} setContact={setContact} setLoctaion={setLoctaion}/>
                <span>{errorMeassage}</span>
                <br/>
                <button onClick={Submit}>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;