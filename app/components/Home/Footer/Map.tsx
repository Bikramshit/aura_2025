"use client";
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Map: React.FC<MapProps> = ({ location }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const containerStyle = {
    width: '100%',
    height: '250PX',
    borderRadius:"0.5rem"
  };

  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);


  return (
 <>
 
 
 <LoadScript googleMapsApiKey={process.env.MAP_API_KEY!} >
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      )}
    </LoadScript>

 </>

  );
};

export default Map;
