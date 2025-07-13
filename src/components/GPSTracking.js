import React, { useState, useEffect } from 'react';
import ResourceMap from './ResourceMap';

const GPSTracking = ({ setLocation }) => {
  const [location, setLocationState] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [resources, setResources] = useState([]); // Store nearby resources
  const [manualInput, setManualInput] = useState(false); // Track manual input

  useEffect(() => {
    if (!manualInput && navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocationState(newLocation);
          setLocation(newLocation);
          setError(null);
          fetchNearbyResources(newLocation); // Fetch only relevant resources
        },
        (error) => {
          setError(error.message);
        },
        { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [setLocation, manualInput]);

  const fetchNearbyResources = async (userLocation) => {
    try {
      const response = await fetch(`/api/resources/nearby?lat=${userLocation.lat}&lng=${userLocation.lng}`, {
        cache: "no-store" // Prevent caching
      });
      
      if (!response.ok && response.status !== 304) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResources(data);
    } catch (error) {
      console.error("Error fetching resources:", error);
      setError("Could not load resources.");
    }
  };

  const handleManualLocation = () => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    if (!isNaN(lat) && !isNaN(lng)) {
      const newLocation = { lat, lng };
      setLocationState(newLocation);
      setLocation(newLocation);
      setError(null);
      fetchNearbyResources(newLocation); // Fetch resources for manual location
      setManualInput(true); // Set manual input flag
    } else {
      setError('Please enter valid latitude and longitude.');
    }
  };

  return (
    <div>
      <h3>User Location:</h3>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {location.lat !== null ? location.lat : 'Loading...'} <br />
          Longitude: {location.lng !== null ? location.lng : 'Loading...'}
        </p>
      )}

      <div>
        <h4>Manual Location Input:</h4>
        <input
          type="text"
          placeholder="Enter Latitude"
          value={manualLat}
          onChange={(e) => setManualLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Longitude"
          value={manualLng}
          onChange={(e) => setManualLng(e.target.value)}
        />
        <button style={{ padding: '5px', backgroundColor: '#fff', color: '#00796b', border: 'none', borderRadius: '5px' }}onClick={handleManualLocation}>Set Location</button>
      </div>

      <h1>RESOURCE MAP</h1>
      <ResourceMap userLat={location.lat} userLng={location.lng} resources={resources} />
    </div>
  );
};

export default GPSTracking;
