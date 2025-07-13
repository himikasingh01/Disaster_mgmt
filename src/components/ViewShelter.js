// src/components/ViewShelters.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAlert } from '../context/AlertContext'; // Ensure this is correct
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'; // Import Leaflet components
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const ViewShelters = () => {
  const { shelters } = useAlert(); // Get shelters from context

  return (
    <div>
       <div>
      <Link to="/dashboard/user">
        <Button variant="contained" color="primary">
          Dashboard
        </Button>
      </Link>
      
  </div>
  <br></br>
      <h2>Available Shelters</h2>
      {shelters.length > 0 ? (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {shelters.map((shelter, index) => (
            shelter.location && (
              <Marker key={index} position={shelter.location}>
                <Popup>
                  <strong>{shelter.title}</strong><br />
                  {shelter.message}
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
      ) : (
        <p>No shelters available.</p>
      )}
    </div>
  );
};

export default ViewShelters;