// src/components/MapView.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const position = [26.8486, 81.0034]; // Replace with Uplynk office/shop location

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Uplynk Office Location<br /> Near Amity University, Lucknow
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
