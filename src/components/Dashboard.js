import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GPSTracking from './GPSTracking'; 
import { useAlert } from '../context/AlertContext'; 
import AlertModal from './AlertModal'; 
import { Button } from '@mui/material';
import '../components/dash.css'; 

const DashboardPage = () => {
  const { role } = useParams(); 
  const { alerts } = useAlert(); 
  const [location, setLocation] = useState({ lat: null, lng: null }); 
  const [alertCount, setAlertCount] = useState(0); 
  const [isAlertVisible, setIsAlertVisible] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(''); 

  // Function to handle bell button click
  const handleBellClick = () => {
    if (alerts.length > 0) {
      const latestAlert = alerts[alerts.length - 1]; // Get the latest alert
      setAlertMessage(`Latest alert generated on: ${latestAlert.date.toLocaleString()}`); // Set the alert message
      setIsAlertVisible(true); // Show the modal
    } else {
      setAlertMessage('No alerts available.'); // Handle case with no alerts
      setIsAlertVisible(true); // Show the modal
    }
    setAlertCount(0); // Reset alert count when clicked
  };

  // Function to simulate receiving an alert
  const simulateAlert = () => {
    const newAlert = {
      title: 'Test Alert',
      message: 'This is a test alert.',
      date: new Date(),
    };
    // addAlert(newAlert); // Add the new alert to the context
    setAlertCount(prevCount => prevCount + 1); // Increment alert count
  };

  // Function to close the alert modal
  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#00796b', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <button style={{ padding: '5px', backgroundColor: '#fff', color: '#00796b', border: 'none', borderRadius: '5px' }}>Back to Home</button>
        </Link>
        <h1>User Dashboard</h1>
        <button onClick={handleBellClick} className="icon-button">
        🔔
        <div className="badge"></div> 
          {/* {alertCount > 0 && } */}
        </button>
      </nav>

      <div style={{ textAlign: 'center', padding: '20px' }}>
      <div className="section">
          <Link to="/plan">
            <Button variant="contained" color="primary">
              Planning
            </Button>
          </Link>
        </div>
        <div className="section">
          <Link to="/view-alerts">
            <Button variant="contained" color="primary">
              View Alerts
            </Button>
          </Link>
        </div>
        <div className="section">
          <Link to="/view-shelters">
            <Button variant="contained" color="primary">
              View Shelter
            </Button>
          </Link>
        </div>
        <div className="section">
          <h3>GPS Tracking</h3>
          <GPSTracking setLocation={setLocation} /> 
        </div>

      

        <AlertModal open={isAlertVisible} handleClose={closeAlert} message={alertMessage} />
      </div>
    </div>
  );
};

export default DashboardPage;