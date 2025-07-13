import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Change this line
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);