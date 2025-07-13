// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const ChangeMapView = ({ lat, lng }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (lat && lng) {
//       map.setView([lat, lng], map.getZoom());
//     }
//   }, [lat, lng, map]);

//   return null;
// };

// const ResourceMap = ({ userLat, userLng, resources }) => {
//   const position = userLat && userLng ? [userLat, userLng] : [51.505, -0.09];

//   return (
//     <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {userLat && userLng && (
//         <>
//           <Marker position={[userLat, userLng]}>
//             <Popup>User Location</Popup>
//           </Marker>
//           <ChangeMapView lat={userLat} lng={userLng} />
//         </>
//       )}
//       {resources.map((resource, index) => (
//         <Marker key={index} position={[resource.Latitude1, resource.Longitude1]}>
//           <Popup>{resource.resource}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default ResourceMap;

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ChangeMapView = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 13);
    }
  }, [lat, lng, map]);

  return null;
};

const ResourceMap = ({ userLat, userLng, resources }) => {
  const position = userLat && userLng ? [userLat, userLng] : [28.1500, 76.6500]; // Default position

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* User Location Marker */}
      {userLat && userLng && (
        <>
          <Marker position={[userLat, userLng]}>
            <Popup>You are here</Popup>
          </Marker>
          <ChangeMapView lat={userLat} lng={userLng} />
        </>
      )}

      {/* Resource Markers */}
      {resources.map((resource, index) => (
        <Marker key={index} position={[resource.Latitude1, resource.Longitude1]}>
          <Popup>{resource.resource}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ResourceMap;
