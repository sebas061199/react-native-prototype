import React from 'react';
import Svg, { Path } from 'react-native-svg';

const EventsIcon = () => (
    <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5"  // Let op: strokeWidth in plaats van stroke-width
    stroke="white" 
    width="30"  // Pas de breedte aan
    height="30" // Pas de hoogte aan
  >
    <Path d="M12 14l9-5-9-5-9 5 9 5z" />
    <Path d="M12 14l9-5-9-5-9 5 9 5z" />
  </Svg>
);

export default EventsIcon;