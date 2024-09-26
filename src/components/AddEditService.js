import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEditService.css';
import healthcareimage from '../assets/healthcareimage.jpg'; // Import image

function AddEditService({ addService, services = [], updateService }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (id) {
      const existingService = services.find((s) => s.id === parseInt(id));
      if (existingService) {
        setService(existingService);
      }
    }
  }, [id, services]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert('All fields are required!');
      return;
    }
    if (id) {
      updateService(service);
    } else {
      addService(service);
    }
    navigate('/');
  };

  return (
    <div className="form-page">
      <div className="image-side">
        <img src={healthcareimage} alt="Healthcare" className="side-image" />
      </div>
      <div className="form-container">
        <h2>{id ? 'Edit Service' : 'Add New Service'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={service.name}
            onChange={handleInputChange}
            placeholder="Service Name"
          />
          <input
            type="text"
            name="description"
            value={service.description}
            onChange={handleInputChange}
            placeholder="Service Description"
          />
          <input
            type="number"
            name="price"
            value={service.price}
            onChange={handleInputChange}
            placeholder="Service Price"
          />
          <button type="submit" className="submit-btn">
            {id ? 'Update Service' : 'Add Service'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEditService;
