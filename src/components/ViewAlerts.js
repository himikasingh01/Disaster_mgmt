// src/components/ViewAlerts.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, List, ListItem, ListItemText,Button } from '@mui/material';
import { useAlert } from '../context/AlertContext';

const ViewAlerts = () => {
  const { alerts } = useAlert(); // Get alerts from context

  // Check if alerts is an array and log its contents
  // console.log('Rendering alerts:', Array.isArray(alerts) ? alerts : 'alerts is not an array');

  return (
   <div>
    <Paper style={{ padding: '20px', backgroundColor: '#fff' }}>
       <div>
      <Link to="/dashboard/user">
        <Button variant="contained" color="primary">
          Dashboard
        </Button>
      </Link>
      
  </div>
  <br></br>
  <div>
      <Typography variant="h4" component="h1" gutterBottom>
        View Alerts
      </Typography>
      {Array.isArray(alerts) && alerts.length === 0 ? (
        <Typography variant="h6">No alerts available at the moment.</Typography>
      ) : (
        <List>
          {Array.isArray(alerts) && alerts.map((alert, index) => (
            <ListItem key={index} style={{ marginBottom: '10px', backgroundColor: '#e0f7fa', borderRadius: '10px' }}>
              <ListItemText
                primary={<Typography variant="h6" style={{ color: 'red' }}>{alert.title}</Typography>}
                secondary={
                  <>
                    <Typography variant="body1">{alert.message}</Typography>
                    <Typography variant="caption" style={{ color: 'gray' }}>
                      Received: {new Date(alert.date).toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
      </div>
    </Paper>
    </div>
  );
};

export default ViewAlerts;