import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from '../context/AlertContext'; // Ensure this is correct
import { TextField, Button, Snackbar } from '@mui/material';

const CreateAlert = () => {
  const { addAlert } = useAlert(); // Get alerts from context
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCreateAlert = () => {
    const newAlert = {
      title: title, // Use title from state
      message: message, // Use message from state
      date: new Date(),
    };
    addAlert(newAlert); // Use the variable
    // console.log('Alert created:', newAlert); // Log the created alert
    setTitle(''); // Clear the title field
    setMessage(''); // Clear the message field
    setSnackbarOpen(true); // Open the snackbar
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      
          <Link to="/dashboard/admin">
            <Button variant="contained" color="primary">
              Dashboard
            </Button>
          </Link>
        
<div>
      <TextField
        label="Alert Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Alert Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCreateAlert}>
        Create Alert
      </Button>
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Alert created successfully!"
        autoHideDuration={3000}
      />
      </div>
    
    </div>
  );
};

// Styling for the Back to Home button
const backButtonStyle = {
  padding: '10px 15px',
  fontSize: '14px',
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CreateAlert;
