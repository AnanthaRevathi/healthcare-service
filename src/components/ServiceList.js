import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';
import healthcareLogo from '../assets/healthcarelogo.jpeg'; // Import logo image

function ServiceList({ services, deleteService }) {
  return (
    <div className="service-list-container">
      <div className="header">
        <img src={healthcareLogo} alt="Healthcare Logo" className="logo" />
        <h1>Healthcare Services</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>
                <Link to={`/edit/${service.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteService(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add">
        <button className="add-button">Add Service</button>
      </Link>
    </div>
  );
}

export default ServiceList;
