import React, { useState } from "react";
import { CONTACT_IMG } from "../utils/constants";
import "../styles/Contact.css"

const Contact = () => {
  const[message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={CONTACT_IMG} alt="" />
      </div>
      
      <div className="contact-right">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required/>
          <input type="text" placeholder="Email" required/>
          <textarea placeholder="Type your message here"></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting with Spoons & Forks, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;