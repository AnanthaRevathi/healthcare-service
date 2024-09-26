// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import AddEditService from './components/AddEditService';
import './App.css';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'Blood Test', description: 'Basic blood test service', price: 50 },
    { id: 2, name: 'MRI Scan', description: 'Magnetic Resonance Imaging', price: 200 },
  ]);

  // Function to add service
  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  // Function to update service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) => (service.id === updatedService.id ? updatedService : service))
    );
  };

  // Function to delete service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ServiceList
              services={services}
              deleteService={deleteService}
            />
          }
        />
        <Route
          path="/add"
          element={<AddEditService addService={addService} />}
        />
        <Route
          path="/edit/:id"
          element={<AddEditService services={services} updateService={updateService} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
