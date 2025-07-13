// src/context/AlertContext.js
import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [shelters, setShelters] = useState([]); // State for shelters

  const addAlert = (alert) => {
    // console.log('Alert created:', alert); // Log the created alert
    setAlerts((prevAlerts) => {
      console.log('Current alerts before update:', prevAlerts); // Log current state
      const updatedAlerts = [...prevAlerts, alert];

      console.log('Updated alerts:', updatedAlerts); // Log the updated alerts
      return updatedAlerts;
    });
  };

  const addShelter = (shelter) => {
    setShelters((prevShelters) => [...prevShelters, shelter]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, shelters, addShelter }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};