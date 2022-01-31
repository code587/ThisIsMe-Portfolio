import React from "react";
import '../../styles/Contact.css';

const ContactForm = () => {
return (
  <form className="formcontainer">
    <div>
      <label for="name">Name:</label>
      <input type="text" className="name" required />
    </div>
    <br></br>
    <div>
      <label for="email">Email:</label>
      <input type="email" className="email" required />
    </div>
    <br></br>
    <div>
      <label for="message">Message:</label>
      <textarea className="memo" required />
    </div>
    <br></br>
      <button className="btn" type="submit">Send</button>
  </form>
  );


};

export default ContactForm