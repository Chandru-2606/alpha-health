import React from "react";

function Cards (props) {
    return (
           <div>
            {/* <input /> */}
                <input placeholder="Name" value={props.name} onChange={(e) => {props.setName(e.target.value)}}/>
                <br />

                <input placeholder="email" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} />
                <br />

                <input placeholder="Password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}}/>
                <br />

                <input placeholder="Contact" value={props.contact} onChange={(e) => {props.setContact(e.target.value)}}/>
                <br />

                <input placeholder="Loaction" value={props.location} onChange={(e) => {props.setLoctaion(e.target.value)}}/>
                <br/>
           </div>
    );
}

export default Cards