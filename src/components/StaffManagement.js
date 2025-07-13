import React, { useState } from 'react';
import { useAlert } from '../context/AlertContext'; // Ensure this is correct
import { TextField, Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

const StaffManagement = () => {
  const { addAlert } = useAlert(); // Get alerts from context
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  return (
    <div>
      {/* Back to Home Button */}
      <div style={{ marginBottom: '20px' }}>

        <Link to="/">
          <Button variant="contained" color="primary" component={Link} to="/">Back to Home</Button>
        </Link>
        <h1>STAFF DASHBOARD</h1>
      </div>
      <div className="section">
          <Link to="/create-alert">
            <Button variant="contained" color="primary">
              create Alert
            </Button>
          </Link>
        </div>
        <div className="section">
          <Link to="/create-shelter">
            <Button variant="contained" color="primary">
              create Shelter
            </Button>
          </Link>
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

export default StaffManagement;
