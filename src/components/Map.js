// src/MapComponent.js
"use client"
// src/MapComponent.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

const MapComponent = () => {
  const RoutingControl = () => {
    const map = useMap();
    const routingControlRef = useRef(null);

    useEffect(() => {
      if (!map) return;

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(29.1492, 75.7217), // Hisar
          L.latLng(30.7333, 76.7794) // Chandigarh
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
      }).addTo(map);

      return () => {
        if (routingControlRef.current) {
          map.removeControl(routingControlRef.current);
        }
      };
    }, [map]);

    return null;
  };

  return (
    <MapContainer center={[29.9412, 76.2506]} zoom={8} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <RoutingControl />
    </MapContainer>
  );
};

export default MapComponent;
