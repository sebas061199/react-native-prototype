// HomeIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LocationsIcon = () => (
    <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5"  // Let op: strokeWidth in plaats van stroke-width
    stroke="white" 
    width="30"  // Pas de breedte aan
    height="30" // Pas de hoogte aan
  >
    <Path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <Path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </Svg>
);

export default LocationsIcon;
