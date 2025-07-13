// src/components/CreateShelter.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from '../context/AlertContext'; // Ensure this is correct
import { TextField, Button, Snackbar } from '@mui/material';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'; // Import Leaflet components
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const CreateShelter = () => {
  const { addShelter } = useAlert(); // Get addShelter from context
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [manualLat, setManualLat] = useState(''); // State for latitude
  const [manualLng, setManualLng] = useState(''); // State for longitude
  const [location, setLocation] = useState(null); // State for the location

  const handleCreateShelter = () => {
    if (!title || !message || !location) {
      alert('Please fill in all fields and set a location.');
      return;
    }

    const newShelter = {
      title: title, // Use title from state
      message: message, // Use message from state
      location: location, // Use location from state
      date: new Date(),
    };
    addShelter(newShelter); 
    setTitle(''); 
    setMessage(''); 
    setLocation(null); 
    setManualLat(''); 
    setManualLng(''); 
    setSnackbarOpen(true); 
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleManualLocation = () => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    if (!isNaN(lat) && !isNaN(lng)) {
      setLocation([lat, lng]); // Set the location state
    } else {
      alert('Please enter valid latitude and longitude values.');
    }
  };

  const handleSubmit = () => {
    handleManualLocation(); // Set the location
    if (location) {
      handleCreateShelter(); // Create the shelter only if location is set
    }
  };

  return (
    <div>
     <div >
          <Link to="/dashboard/admin">
            <Button variant="contained" color="primary">
              Dashboard
            </Button>
          </Link>
        </div>  
      <h4>Manual Location Input:</h4>
      <TextField
        label="Enter Latitude"
        value={manualLat}
        onChange={(e) => setManualLat(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Enter Longitude"
        value={manualLng}
        onChange={(e) => setManualLng(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Shelter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Shelter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit} // Call the new handleSubmit function
      >
        Set Location and Create Shelter
      </Button>

      {/* {location && (
        <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location} />
        </MapContainer>
      )} */}

      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Shelter created successfully!"
        autoHideDuration={3000}
      />
    </div>
  );
};

export default CreateShelter;