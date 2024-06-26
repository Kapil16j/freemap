// src/MapComponent.js
import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapComponentNoSSR = dynamic(() => import('./MapComponentNoSSR'), { ssr: false });

const MapComponent = () => {
  return <MapComponentNoSSR />;
};

export default MapComponent;
