import React, { useState } from "react";
import './App.css';
import axios from "axios";



const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message
    };

    axios.post('http://localhost:4000/api/form', formData)
      .then(response => {
        console.log("[Form]Form data saved successfully");
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error("[Form]Error saving form data:", error);
      });

    console.log("[Form]The user submitted the form with the following data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields
    // setName('');
    // setEmail('');
    // setMessage('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="Form">
      <form className="FormContainer" onSubmit={handleSubmit}>
        <label className="FormField">
          <span className="FormFieldLabel">Name:</span>
          <input className="FormFieldInput" type="text" name="name" placeholder="Enter your name" value={name} onChange={handleNameChange} />
        </label>
        <label className="FormField">
          <span className="FormFieldLabel">Email:</span>
          <input className="FormFieldInput" type="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </label>
        <label className="FormField">
          <span className="FormFieldLabel">Message:</span>
          <textarea className="FormFieldTextarea" name="message" placeholder="Enter your message" value={message} onChange={handleMessageChange} />
        </label>
        <button className="FormSubmitButton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
