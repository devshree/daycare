import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add a new user
      await axios.post('http://localhost:4000/api/users', formData);
      alert('User created successfully');
      setFormData({
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        dateOfBirth: '',
      });
    } catch (error) {
      console.error('Error adding user', error);
      alert('An error occurred while adding the user');
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="FormContainer">
        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="name">
            Name:
          </label>
          <input
            className="FormFieldInput"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="email">
            Email:
          </label>
          <input
            className="FormFieldInput"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="address">
            Address:
          </label>
          <input
            className="FormFieldInput"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            className="FormFieldInput"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="dateOfBirth">
            Date of Birth:
          </label>
          <input
            className="FormFieldInput"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <button className="FormSubmitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
