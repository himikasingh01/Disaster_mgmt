// import React from 'react';
// import { Modal, Typography } from '@mui/material';

// const AlertModal = ({ open, handleClose, alerts = [] }) => { // Default to an empty array
//   return (
//     <Modal open={open} onClose={handleClose}>
//       <div>
//         <Typography variant="h6">Alerts</Typography>
//         {alerts.length === 0 ? (
//           <Typography>No alerts available.</Typography>
//         ) : (
//           alerts.map((alert, index) => (
//             <div key={index}>
//               <Typography variant="body1">{alert.title}: {alert.message}</Typography>
//             </div>
//           ))
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default AlertModal;


// src/components/AlertModal.js
// src/components/AlertModal.js
import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const AlertModal = ({ open, handleClose, message }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      }}>
        <div style={{
          backgroundColor: 'white', // White background for the box
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
          textAlign: 'center',
        }}>
          <Typography variant="h6">{message}</Typography>
          <Button onClick={handleClose} variant="contained" color="primary" style={{ marginTop: '20px' }}>
            OK
            
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal; 